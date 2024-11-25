import fs from 'fs/promises';
import tailwindcss from 'tailwindcss';
import postcss from 'postcss';
import autoprefixer from 'autoprefixer';
import tailwindConfig from '../../../../tailwind.config';

export async function GET() {
    try {
        const tailwindInput = `
          @tailwind base;
          @tailwind components;
          @tailwind utilities;
        `;
        
        const result = await postcss([tailwindcss({
            ...tailwindConfig , 
            content : [
                ...tailwindConfig.content,
                './public/runtime-theme.json'
            ],
            corePlugins: {
                preflight: false,
            },
        }), autoprefixer]).process(tailwindInput, {
            from: '', 
        });
        
        const outputFilePath = './public/runtime.css';
        await fs.writeFile(outputFilePath, result.css, 'utf-8');
    
        return Response.json({ message: 'CSS compiled successfully', path: '/runtime.css' });
    } catch (error) {
        console.error('Error compiling Tailwind CSS:', error);
        Response.json({ error: 'Failed to compile Tailwind CSS' });
    }
  }
