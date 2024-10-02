# What's left after this commit
- Doughnut chart is done - using dummy data
- I need to combine all the created elements and join them together and work on the ui
- Create a navbar and footer


# Time spent until now
Around 1:00-1:30 hours

# Tables

The tables are using @tanstack/react-table and shadcn tables
src/components/common/AppTable.tsx is the component I'll be using for all tables, its styled and uses shadcn's table and react-table to manage ui and data


# UI Components

Utilizing Shadcn and tailwindcss as requested - We have the components added from shadcn
Currently added components

- Table
- Button
- Card
- Chart


# Basic Project Structure

The project is set up in a way that would be similar to how I would set this up in an actual project

# Data Fetching

We are using @tanstack/react-query for fetching data
In the src/hooks folder you can find all the hooks that are being used to return data
The src/services folder has all the api calls (Currently api calls are returning dummy data). They are set up in a way that you can just comment the dummy data and it would switch to actual apis (provided the endpoints work)


# Typescript and Typings

All Typings are present in src/types folder


