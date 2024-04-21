# Casetext Homework Assignment

This project involves a frontend built with React, Vite, and Tailwind CSS. It also requires a backend component, which can be found at the provided link.

## Table of Contents
- [Casetext Homework Assignment](#casetext-homework-assignment)
  - [Table of Contents](#table-of-contents)
  - [Technologies Used](#technologies-used)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Run Project](#run-project)
  - [ATM System Overview](#atm-system-overview)
  - [AtmState Interface and Derived Classes](#atmstate-interface-and-derived-classes)
  - [Buttons and Callbacks](#buttons-and-callbacks)
  - [Input Functionality](#input-functionality)
  - [Fonts](#fonts)

## Technologies Used
- **React**: A JavaScript library for building user interfaces.
- **Vite**: A modern build tool that provides a faster development experience.
- **Tailwind CSS**: A CSS framework that allows for rapid styling directly in your HTML.

## Prerequisites
To work on this project, you need to have Node.js installed in your local environment. Additionally, this project uses [PNPM](https://pnpm.io/installation) as its package manager, which offers better performance and efficiency in dependency management. Follow the instructions on their official page to install PNPM.

- Node.js >= 20.12.2
- PNPM >= 9.0.2

Additionally, you need to install [Mkcert](https://github.com/FiloSottile/mkcert). Follow the instructions in the GitHub repository to set it up.

**Important:** This project requires a backend, which you can find [here](https://github.com/JoseMM2002/Backend_HW_Project). Please follow the backend repository's installation instructions to set it up.

## Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/JoseMM2002/Frontend_HW_Project.git
   cd Frontend_HW_Project

2. **Install Dependencies:**
    ```bash
   pnpm install

## Run Project

1. **Run developer mode**
    ```bash
   pnpm run dev

2. **Build and preview Project:**
    ```bash
    pnpm run build
    pnpm run preview

## ATM System Overview
This ATM system's frontend is built with React. To manage the logic and screen transitions, you've designed an interface called AtmState. The purpose of this interface is to define the structure of classes that represent different screens in the ATM. Here's a breakdown of how the system works:
AtmState Interface and Derived Classes

## AtmState Interface and Derived Classes
The AtmState interface serves as a base for classes representing the various screens of the ATM. Each screen has its unique functionality and logic, but they all share the properties defined by AtmState.

## Buttons and Callbacks
Buttons on the ATM interface allow users to select specific actions. Each button has an associated callback that changes the screen's state. These callbacks use a React hook to change the state, enabling the system to display different screens based on the selected action.

## Input Functionality
In addition to buttons, you created inputs to handle more complex functions, such as:

 1. **Authenticating a Card**: This input allows users to authenticate a card to access ATM functions.
 2. **Withdrawals, Deposits, and Balance Checks**: Specific inputs for these operations send requests to the API to perform the corresponding action.
 3. **Return to Home Screen**: Allows users to return to the ATM's home screen.

## Fonts
- **[BigBlueTerm Font](https://www.nerdfonts.com/)** - This project incorporates Big Blue Term Font found on Nerd Fonts.
