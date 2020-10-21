use companies;
-- 0. Retrieve all rows and all columns of employee table
select * 
from employee;

-- 0. Retrieve First name and last name of ALL employees
select Fname, Lname
from employee;

-- 1. Retrieve details of all male employees who draw a salary which is at least 30000
select *
from employee
where sex = 'M' and salary >= 30000;

-- 2. Retrieve the details of all dependents of essn 333445555
select * 
from dependent 
where essn = 333445555;

-- 3. Retrieve details of projects that are based out Houston or Stafford
select * 
from project
where plocation in ( 'Houston', 'Stafford' );

-- 4. Retrieve details of projects that are based out Houston or belongs to department 4
select * 
from project
where plocation = 'Houston' or dnum = 4;

-- 5. Display the name of the department and the year in which the manager was appointed (Hint: Use the YEAR() function YEAR(mgr_start_date)
select dname, year(mgr_start_date) 
from department;

-- 6. Display the SSN of all employees who live in Houston
--    (Hint: use LIKE() function as in address LIKE '%Houston%'
select ssn 
from employee 
where address like '%Houston%';

-- 6. Display employees whose name begins with J
select * 
from employee
where Fname like 'J%';

-- 7. Display details of all (male employee who earn more than 30000) or female employees who earn less than 30000)
select * 
from employee 
where ( sex = 'M' and salary >= 30000 ) or ( sex = 'F' and salary < 30000 );

-- 8. Display the essn of employees who have worked betwen 25 and 50 hours
--      a) Use AND clause
--      b) use BETWEEN clause  as in Hours between 25 and 30
select essn from works_on where hours >= 25 and hours <= 30;
select essn from works_on where hours between 25 and 30;

-- 9. Display the names of projects that are based out of houston or stafford
--      a) Use OR clause
--      b) Use IN clause as in Plocation in ('Houston', 'Stafford')

select * 
from project
where plocation = 'Houston' or plocation = 'Stafford';

select * 
from project
where plocation in ( 'Houston', 'Stafford' );

-- 10. Display the names of the project that are neither based out of houston nor out of stafford
--      a) Use AND/OR clause
--      b) use NOT IN clause as in Plocation NOT IN ('Houston','Stafford')
select * 
from project
where plocation <> 'Houston' and plocation <> 'Stafford';

select * 
from project
where plocation not in ( 'Houston', 'Stafford' );

-- 11. Display the ssn and fully concatenated name of all employees
-- 	Use CONCAT function as in CONCAT(fname, ' ', minit, ' ', lname)
select ssn, concat(fname, ' ', minit, ' ', lname) as fullname
from employee;

-- 12. Display the employee details who does not have supervisor
-- 	Use IS NULL as in super_ssn IS NULL
select * 
from employee 
where super_ssn is null;

-- 13. Display the ssn of employees sorted by their salary in ascending mode
-- 	Use ORDER by SALARY
select ssn 
from employee 
order by salary;

-- 14. Sort the works_on table based on Pno and Hours
select * 
from works_on 
order by pno, hours;

-- 15. Display the average project hours 
select avg(hours) as `average project hours`
from works_on;

-- 16. Display the number of employees who do not have a manager
select count(*) from employee
where super_ssn is null;

-- 17. What is the average salary of employees who do not have a manager
select avg(salary) 
from employee 
where super_ssn is null;

-- 18. What is the highest salary of female employees
select max(salary) 
from employee 
where sex = 'F';

-- 19. What is the least salary of male employees
select min(salary) 
from employee 
where sex = 'M';

-- 20. Display the number of employees in each department
select dno, count(*)
from employee 
group by dno;

-- 21. Display the average salary of employees (department-wise and gender-wise)
-- 	GROUP BY Dno, Sex
select dno, sex, avg(salary) 
from employee 
group by dno, sex;

-- 22. Display the number of male employees in each department
select dno, count(*) 
from employee 
where sex = 'M' group by dno;

-- 23. Display the average, minimum, maximum hours spent in each project
select pno, min(hours), max(hours), avg(hours)
from works_on
group by pno;

-- 24. Display the year-wise count of employees based on their year of birth
select year(bdate), count(*)
from employee 
group by year(bdate);

-- 25. Dipslay the number of projects each employee is working on
select employee.fname, count( works_on.pno ) 
from employee, works_on 
where employee.ssn = works_on.essn group by works_on.essn;

select essn, count(pno) from works_on group by essn;

-- 26. Display the Dno of those departments that has at least 3 employees
select dno from employee 
group by dno 
having count(*) >= 3;

-- 27. Among the people who draw at least 30000 salary, what is the department-wise average?
select dno, avg(salary) 
from employee 
where salary >= 30000 group by dno;

-- 27b. Instead of dno, display dname
select dname, A.`avg salary` 
from department, (
	select dno, avg(salary) as `avg salary`
	from employee
	where salary >= 30000 
    group by dno
) as A 
where dnumber = A.dno;

-- 28. Display the fname of employees working in the Research department
select fname 
from employee 
where dno = ( 
	select dnumber 
    from department 
    where dname = 'Research'
);

-- 29. Display the fname and salary of employees whose salary is more than the average salary of all the employees
select fname, salary 
from employee 
where salary > ( 
	select avg(salary) 
    from employee 
);

-- 30. Which project(s) have the least number of employees?
select pno, count(essn) as employee_count 
from works_on 
group by pno 
order by employee_count;

-- 31. Display the fname of those employees who work for at least 20 hours
select fname 
from employee, ( 
	select essn 
    from works_on 
    where hours >= 20 
) as A 
where A.essn = ssn;


-- 32. What is the average salary of those employees who have at least one
--     dependent
select avg(salary) 
from employee, ( 
	select count(*) as dept_count 
	from employee 
	group by dno 
) as A
 where A.dept_count > 1;
 
-- JOIN Examples



-- 33. Display the ssn, lname and the name of the department of all the employees
select e.ssn, e.lname, d.dname 
from employee e join department d on e.dno = d.dnumber;

-- 34. Display the ssn, lname, name of project of all the employees
select e.ssn, e.lname, p.pname 
from employee e inner join project p on e.dno = p.dnum;

-- 35a. Display the ssn, their department, the project they work on and
--     the name of the department which runs that project
-- 	Hint: Needs a 5 table join
-- 	Output heading: ssn, emp-dept-name, pname, proj-dept-no
select e.ssn, e.dno as `emp-dept-name`, pname, p.dnum as `proj-dept-name`
from employee e
inner join
works_on w on w.essn = e.ssn
inner join 
project p on p.pnumber = w.pno;


-- 35b. Display the deptname, the project the department runs
-- 	Output heading: dept-name, pname
select d.dname as `dept-name`, p.pname 
from department d inner join project p on d.dnumber = p.dnum;

-- SOME COMPLICATED SQL Queries for Self-Study

-- 36. What is the name of the department that has least number of 
--     employees?
select dname 
from department 
where dnumber = ( 
	select A.dno 
    from ( 
		select dno, count(*) as emp_count from 
        employee 
        group by dno 
        order by emp_count 
        limit 1 
	) as A
);

-- 37. What is the name of the department whose employees have the highest
--     average salary?
select dname 
from department, (
	select dno , avg(salary) as avg_salary
    from employee
    group by dno
    order by avg_salary desc
    limit 1
) as A 
where dnumber = A.dno;

-- 38. Display the fname of the employee along with the fname of the manager
select e2.fname, e1.fname 
from employee e1 inner join employee e2 on e1.ssn = e2.super_ssn;

-- 39. Which employees work on projects belonging to departments other
--     than departments they belong to
-- 	Output: ssn, pname, emp-dept-name, proj-dept-name
select distinct e.ssn, p.pname, e.dno as `emp-dept-name`, p.dnum as `proj-dept-name` 
from employee e 
inner join 
department d on e.dno <> d.dnumber 
inner join 
project p on p.dnum <> e.dno 
inner join 
works_on w on w.pno = p.pnumber
where w.essn = e.ssn;



-- ==============================================

-- LEFT OUTER JOIN

-- Inner join between employee and dependent
select e.ssn, e.fname, d.dependent_name
from employee e inner join dependent d on e.ssn = d.essn;

-- Left Outer join between employee and dependent
select e.ssn, e.fname, d.dependent_name
from employee e left join dependent d on e.ssn = d.essn;

-- Right out joint between dependent and employee
select e.ssn, e.fname, d.dependent_name
from deparment d right join employee e on e.ssn = d.essn;