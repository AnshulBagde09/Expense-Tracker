Intern ID:CITS1711

# 📖 User Guide


## Getting Started

1. Register a new account using the **Register** page.
2. Log in with your email and password.
Email: anshu@example.com
Password: 123456
3. After logging in, you will be redirected to the Dashboard.


# 🚀 Quick Start

1. Start MongoDB.
2. Run the backend.

```bash
cd server
npm install
npm run dev
```

3. Run the frontend.

```bash
cd client
npm install
npm run dev
```

4. Open your browser.

```
http://localhost:5173
```

5. Register a new account.

6. Login.

7. Add your expenses.

8. View, manage, and delete expenses from the dashboard.


---

## Dashboard

The dashboard displays:

- Total Expenses
- Number of Transactions
- Average Expense
- Monthly Expense Chart
- Category Chart
- Recent Expenses Table

---

## Add a New Expense

1. Fill in the **Add Expense** form.
2. Enter:
   - Title
   - Amount
   - Category
   - Date
   - Note (Optional)
3. Click **Add Expense**.
4. The expense will be saved to the database and immediately appear in the expense table.

---

## View Expenses

All expenses are displayed in the **Recent Expenses** table.

Each expense includes:

- Title
- Category
- Amount

---

## Delete an Expense

1. Locate the expense in the table.
2. Click the **Delete** button.
3. Confirm the deletion.
4. The expense will be permanently removed from the database.

---

## Authentication

- Users must log in before accessing the dashboard.
- All expense data is private to the logged-in user.
- JWT authentication is used to secure the application.

---

## Logout

Click the **Logout** button in the navigation bar to securely end your session.

---

## Notes

- Make sure the backend server is running before using the frontend.
- MongoDB must be connected successfully.
- Keep your JWT token secure.
