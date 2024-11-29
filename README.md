# Alpha Elements

## Description

It's a React library built as part of the design system for the "KOMODO" platform.

### How to install

- Set your SSH key to github
- Go to the Alpha Elements Repository in Github
- Clone it in your dev machine
- After initial open on the VScode it will recommend some extension to make the development easier please install them. you can check it on `.vscode/extensions.json`
- The project require node js version 22.11.0
- Use pnpm to install dependency and run this project

### How to setup the SSH

- for Windows
  - Goto your cmd then type `ssh-keygen`
  - It will save your key in a specific folder the file name will like id_rsa.pub
  - Goto your github account in the settings option you have an option to update your ssh key info copy & paste your key there.
- for mac
  - Open the terminal
  - Type `ssh-keygen -t rsa`
  - Enter a file name to save the key
  - Enter a passphrase
  - You can copy the ssh public key to your clipboard by running the command `cat ~/ .ssh/id_rsa.pub | pbcopy`
- for linux
  - Open the terminal
  - Run the `ssh-keygen` command
  - use the -t option to specify the type of the key to create
  - Enter the path to the file in which you want to save the key
  - Enter a passphrase
  - key will be created in the ~/.ssh directory you can copy and paste it in your github account

### How to run

In this project we are using `node` & `pnpm`, so need to install them then only you can run it in dev machine.

- install nvm
  - for mac (ref: <https://sukiphan.medium.com/how-to-install-nvm-node-version-manager-on-macos-d9fe432cc7db>)

    ```bash
      brew install nvm
      nvm --version
    ```

  - for windows (ref : <https://github.com/coreybutler/nvm-windows#readme>)

  - for linux (ref : <https://codedamn.com/news/nodejs/nvm-installation-setup-guide>)

    ```bash
      curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash
      nvm --version
    ```

- install node (v22.11.0)

  ```bash
    nvm install 22.11.0
  ```

- install pnpm
  - for windows

    ```bash
      nvm pnpm install
    ```

  - for mac/linux

    ```bash
      nvm pnpm install
      corepack enable
      corepack prepare pnpm@latest --activate
    ```

- install project dependency

  ```bash
    pnpm install
  ```

- run project

  ```bash
    pnpm dev
  ```

- After running the project you can get more option by pressing h + enter for extra option
- press o + enter to Open with your browser to see the result.

### How to build

- build project

  ```bash
    pnpm build
  ```

- to run the build file
  
  ```bash
    pnpm dev:preview
  ```

### How to run test

- test project
  - option 1 (you can able to check the test cases and results by click the icon named testing in code editor)

    ```bash
      pnpm test
    ```

  - option 2 (UI for testing it will open on browser with test cases and results)

    ```bash
      pnpm test:ui
    ```

### How to run storybook

```bash
  pnpm storybook
```

### Extra integrations

- Storybook (8.4.5)
  - it's for documenting the elements with customizable stylings.
- Husky (9.1.7)
  - it's for code validations and automating the build procedures.
- Vite (8.4.5)
  - it's for running the unit testings.
- Tailwind CSS
  - it's for the css styling purposes.
- eslint
  - it's for coding validations
