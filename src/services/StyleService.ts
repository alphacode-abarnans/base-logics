interface ButtonConfig {
  text: string;
  padding: string;
  border: string;
  borderRadius: string;
}

interface InputConfig {
  button: {
    primary: string;
  };
}

interface ThemeConfig {
  theme: string;
  variant: string;
  version: string;
  button: ButtonConfig;
  input: InputConfig;
}

// Function to replace placeholders with actual values
export function replacePlaceholders(config: ThemeConfig): ThemeConfig {
  const replace = (str: string, data: ThemeConfig): string => {
    // Match all placeholders of the form {{key}}
    return str.replace(/{{([^}]+)}}/g, (_, key) => {
      const keys = key.split("."); // Handle nested keys like button.text
      let value: unknown = data;
      for (const k of keys) {
        if (typeof value === "object" && value !== null && k in value) {
          value = (value as Record<string, unknown>)[k];
        } else {
          value = undefined;
          break;
        }
      }
      return value ? String(value) : "";
    });
  };

  // Use a recursive function to replace placeholders in all properties of the config object
  function recurse(obj: unknown): unknown {
    if (typeof obj === "string") {
      return replace(obj, config); // Replace in string properties
    }

    if (Array.isArray(obj)) {
      return obj.map(recurse); // Recursively handle arrays
    }

    if (typeof obj === "object" && obj !== null) {
      const newObj: Record<string, unknown> = {};
      for (const [key, value] of Object.entries(obj)) {
        newObj[key] = recurse(value); // Recursively handle object properties
      }
      return newObj;
    }

    return obj; // If it's neither a string, object, nor array, return as is
  }

  return recurse(config) as ThemeConfig;
}
