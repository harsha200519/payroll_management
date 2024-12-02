document.addEventListener('DOMContentLoaded', function() {
    // Updated employee data with Employee IDs starting from 1
    const employees = [
        { EmployeeID: 1, Name: "OP. Suresh", Position: "HOD", Department: "EEE", BasicSalary: "55000.00", Contact: "9876543215" },
        { EmployeeID: 2, Name: "Chiranjeevi", Position: "Professor", Department: "EEE", BasicSalary: "40000.00", Contact: "9876543216" },
        { EmployeeID: 3, Name: "K. Suresh", Position: "Professor", Department: "EEE", BasicSalary: "35000.00", Contact: "9876543217" },
        { EmployeeID: 4, Name: "Pranathi Aryan", Position: "Assistant", Department: "EEE", BasicSalary: "38000.00", Contact: "9876543218" },
        { EmployeeID: 5, Name: "Naveen", Position: "Assistant", Department: "EEE", BasicSalary: "37000.00", Contact: "9876543219" },
        { EmployeeID: 6, Name: "Sathyanarayana", Position: "Professor", Department: "EEE", BasicSalary: "34000.00", Contact: "9876543220" },
        { EmployeeID: 7, Name: "Madhavi", Position: "Professor", Department: "EEE", BasicSalary: "42000.00", Contact: "9876543221" },
        { EmployeeID: 8, Name: "Divya", Position: "Lecturer", Department: "EEE", BasicSalary: "36000.00", Contact: "9876543222" },
        { EmployeeID: 9, Name: "Siddarth", Position: "Professor", Department: "EEE", BasicSalary: "43000.00", Contact: "9876543223" },
        { EmployeeID: 10, Name: "Raani", Position: "Assistant", Department: "EEE", BasicSalary: "39000.00", Contact: "9876543224" },
        { EmployeeID: 11, Name: "Raviteja", Position: "Lecturer", Department: "EEE", BasicSalary: "38000.00", Contact: "9876543225" }
    ];

    // Login form submission
    const loginForm = document.getElementById('loginFormId');
    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();
        
        const empID = document.getElementById('empID').value;
        const password = document.getElementById('password').value;

        // Simple check for valid login (in real applications, this should be handled securely)
        const employee = employees.find(emp => emp.EmployeeID == empID);
        if (employee && password === "hitam123") { // Password logic (you can change this)
            // Hide login form and show employee data sections
            document.getElementById('loginForm').style.display = 'none';
            document.getElementById('employeeData').style.display = 'block';
            document.getElementById('payrollSection').style.display = 'block';
            document.getElementById('attendanceSection').style.display = 'block';
            document.getElementById('logoutSection').style.display = 'block';

            // Show employee-specific data
            showEmployeeData(employee);
            showPayrollData(employee);
            showAttendanceData(employee);
        } else {
            document.getElementById('loginError').style.display = 'block';
        }
    });

    // Show employee-specific details in the table
    function showEmployeeData(employee) {
        const tableBody = document.getElementById('employeeTable').getElementsByTagName('tbody')[0];
        tableBody.innerHTML = ''; // Clear existing data
        const row = tableBody.insertRow();
        row.insertCell(0).textContent = employee.EmployeeID;
        row.insertCell(1).textContent = employee.Name;
        row.insertCell(2).textContent = employee.Position;
        row.insertCell(3).textContent = employee.Department;
        row.insertCell(4).textContent = employee.BasicSalary;
        row.insertCell(5).textContent = employee.Contact;
    }

    // Show payroll data (Basic Salary + Bonus)
    function showPayrollData(employee) {
        const tableBody = document.getElementById('payrollTable').getElementsByTagName('tbody')[0];
        tableBody.innerHTML = ''; // Clear existing data
        const row = tableBody.insertRow();
        row.insertCell(0).textContent = employee.EmployeeID;
        row.insertCell(1).textContent = employee.Name;
        row.insertCell(2).textContent = employee.Position;
        row.insertCell(3).textContent = employee.Department;
        row.insertCell(4).textContent = employee.BasicSalary;
        const bonus = (parseFloat(employee.BasicSalary) * 0.1).toFixed(2); // 10% bonus
        row.insertCell(5).textContent = bonus;
        const totalSalary = (parseFloat(employee.BasicSalary) + parseFloat(bonus)).toFixed(2);
        row.insertCell(6).textContent = totalSalary;
    }

    // Show attendance data (for simplicity, a static attendance value here)
    function showAttendanceData(employee) {
        const tableBody = document.getElementById('attendanceData');
        tableBody.innerHTML = ''; // Clear existing data
        const row = tableBody.insertRow();
        row.insertCell(0).textContent = employee.EmployeeID;
        row.insertCell(1).textContent = employee.Name;
        row.insertCell(2).textContent = "95%"; // Example attendance data
    }

    // Logout function
    const logoutButton = document.getElementById('logoutButton');
    logoutButton.addEventListener('click', function() {
        document.getElementById('loginForm').style.display = 'block';
        document.getElementById('employeeData').style.display = 'none';
        document.getElementById('payrollSection').style.display = 'none';
        document.getElementById('attendanceSection').style.display = 'none';
        document.getElementById('logoutSection').style.display = 'none';
        document.getElementById('loginError').style.display = 'none';
    });
});