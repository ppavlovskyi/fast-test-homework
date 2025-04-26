# Fast-Test Homework

## Overview

This project is the solution for the fast-test homework assignment.

- **Framework**: React 18
- **State management**: MobX 6 and MobX-React 9
- **Testing**: Jest

The architecture follows the MVP/MVVM pattern:
- Logic is fully separated into Controllers.
- State is managed through MobX Stores.
- Views are functional components, connected via Controllers only.

---

## How to Run

1. Clone the repository:

```bash
git clone https://github.com/ppavlovskyi/fast-test-homework.git
cd fast-test-homework
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Run the tests:
```bash
npm test
```

Important Notes
The API uses a self-signed SSL certificate.

Before using the application, open any endpoint from the API (e.g., https://tdd.demo.reaktivate.com/v1/books/[user] ) in your browser and allow the certificate.

You must replace [user] with your actual nickname provided for the API access.