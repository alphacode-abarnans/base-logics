# Alpha Elements
## Description
    
It's a React library built as part of the design system for the "KOMODO" platform.

### How to install

- Go to the Alpha Elements Repository in Github [https://github.com/AlphaCode-Technologies/alpha-elements](...)
- Set your SSH key 
- Clone it in your local 
- Use pnpm to run this project..
- It will require node js version 22.11 & nvm version ^0.39.0

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
In this project we are using `pnpm`, so need to install pnpm then you can run it in local.
In here you can ignore run in usual commands

```bash
# to install pnpm
nvm pnpm install
# to change the node js package management
corepack enable pnpm
# to run
pnpm dev
```
after running the project you can get more option by pressing h + enter for extra option

press o + enter to Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

you can run the test by pnpm test

### Extra integrations
- Storybook (8.4.5)
  - it's for documenting the elements with customizable stylings.
  - to run it give the command as `pnpm storybook`.
  - it will open in separate hosting address.
- Husky (9.1.7)
  - it's for code validations and automating the build procedures.
- Vite (8.4.5)
  - it's for running the unit testings.
- Tailwind CSS
  - it's for the css styling purposes.
- eslint
  - it's for coding validations