#File Structure
------

##Brad Frost defines five main stages of UI components:

### 1. Atoms
### 2. Molecules
### 3. Organisms
### 4. Templates
### 5. Pages

Atoms are the simplest form of UI, consisting of things like headers, labels, input fields, buttons, etc.
Molecules are a combination of atoms that form more complex pieces of our UI, such as a search field with a submit button.
Organisms build on top of molecules and orchestrate larger parts of the UI. This can include a list of products, a header, forms, etc. Organisms can even include other organisms.
Templates are where our pages start to come together, giving context to all of our organisms and molecules by giving them a unified purpose. For example, a template for a contact page will have organisms for headers and forms, and molecules for text fields and navigation bars.
Pages, as the name implies, is our final page with all its content. The difference between pages and templates is that templates don’t provide any content.