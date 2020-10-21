-- 1. Switch to world DB
use world;

-- 2. List all tables 
show tables;

-- 3. View the schema of all tables
desc city;
desc country;
desc countryLanguage;

-- 4. Select all rows from the tables
select * from city;
select * from country;
select * from countrylanguage;

-- 5. Select the codes of all countries from North America
select code
from country
where continent like 'North America';

-- 6. SUBQUERY: Select language details for English language for countries in North America. Additionally English must be an official language there.
select * 
from countryLanguage
where language like 'English' and isOfficial = 'T' and CountryCode in (
		select code 
		from country 
		where continent like 'North America'
    );

-- 7. COUNT: Select count of cities
select count(*) as total_cities
from city;

-- 8. GROUP BY, ORDER BY, COUNT: Which country has highest number of cities?
select country.name, count(*) as city_count 
from city, country 
where city.CountryCode = country.code 
group by country.name 
order by city_count desc;

-- 9. WHERE, BETWEEN: Which language is its country’s official language and spoken by 80 to 90 percent of people?
select name from country where code in (
		select CountryCode 
		from countryLanguage 
		where isOfficial = 'T' and Percentage between 80 and 90
    );

-- WHERE, COUNT: how many cities have been listed in Maharashtra district of India
select count(*) 
from city 
where district like 'Maharastra';

-- WHERE, MAX, SUBQUERY: Which country has the maximum population (if population is taken as the population from the country table)
select name 
from country where Population = (
		select max(Population) 
        from country 
	);

-- Using subquery: Find the maximum population of a country, then find the country with that population. Combine the two steps using a sub-query.
select name 
from country where Population = (
		select max(Population) 
        from country 
	);

-- ORDER BY, LIMIT: Which country has the maximum population (if population is taken as the population from the country table)
select name 
from country 
order by Population 
desc limit 1;

-- COUNT, GROUP BY, ORDER BY: Which language is spoken in the maximum number of countries?
select countryLanguage.Language, count(*) as countires_count 
from country, countryLanguage 
where country.code = countryLanguage.CountryCode 
group by countryLanguage.Language 
order by countires_count desc 
limit 1;

-- WHERE (including filtering language), COUNT, GROUP BY, ORDER BY: Among the following, which language is the official language of the most number of countries?
-- Languages to consider: German, Russian, Chinese
-- NOTE: Efficient solution
select countryLanguage.Language, count(*) as countires_count 
from country, countryLanguage 
where country.code = countryLanguage.CountryCode and countryLanguage.isOfficial = 'T' and (countryLanguage.Language = 'English' or  countryLanguage.Language = 'German' or countryLanguage.Language = 'Chinese')
group by countryLanguage.Language 
order by countires_count desc ;

-- WHERE (excluding filtering language), COUNT, GROUP BY, HAVING (filtering by language IN), ORDER BY: Among the following, which language is the official language of the most number of countries?
-- Languages to consider: German, Russian, Chinese
-- NOTE: Relatively inefficient solution
select countryLanguage.Language, count(*) as countires_count 
from country, countryLanguage 
where country.code = countryLanguage.CountryCode and countryLanguage.isOfficial = 'T'
group by countryLanguage.Language 
having countryLanguage.Language in ('English', 'German', 'Chinese')
order by countires_count desc ;

-- WHERE, AND (optionally INNER JOIN) How many countries in North America are there where English is the official language?
select count(*) 
from country
where continent = 'North America' and code in ( 
		select countryCode 
        from countryLanguage 
        where isOfficial = 'T'
	);
    
-- SUBQUERY, WHERE, AND (optionally INNER JOIN), COUNT, GROUP BY: Who are the heads of state in countries in North America are there where English is the official language. How many such countries are under respective heads of state?
-- doubt
select HeadOfState from country where continent = 'North America';

select HeadOfState 
from country where continent = 'North America' and code in (
	select CountryCode 
    from countryLanguage 
    where Language = 'English' and isOfficial = 'T' 
);

select name 
from country where HeadOfState in ( 
	select HeadOfState 
    from country 
    where continent = 'North America' and code in ( 
		select CountryCode 
        from countryLanguage 
        where Language = 'English' and isOfficial = 'T' 
	)
);

-- ORDER BY, LIMIT: Which city has the maximum population?
select name 
from city 
order by population desc 
limit 1;

-- SUBQUERY, MAX: Which city has the maximum population?
select name 
from city 
where population = ( 
		select max(population) 
		from city
	);

-- WHERE, NULL: How many row entries are there with any value in the country table being missing?
-- told to leave

-- COUNT, WHERE, LIKE: How many countries are there whose name starts with I and ends with A?
select count(name) 
from country 
where name like 'I%A';

-- SUM, GROUP BY, ORDER BY, LIMIT: Which continent has least surface area?
select continent
from country
group by continent
order by sum(SurfaceArea)
limit 1; 

-- WHERE, ORDER BY: What are the top 5 languages spoken in India?
select language 
from countryLanguage 
where CountryCode in ( 
		select code 
		from country 
        where name like 'India'
	) 
order by percentage desc 
limit 5;

-- COUNT, GROUP BY, ORDER BY: How many languages are spoken (as per data available) in each country? Present your results in descending order of number of languages spoken.
select country.name, count(*) as Languages_Spoken
from countryLanguage, country
where country.code = countryLanguage.CountryCode
group by country.name;


-- WHERE, COUNT, GROUP BY: What is the count of countries for each unique combination of Government form and head of state?
select count(name),GovernmentForm, HeadOfState from country group by GovernmentForm, HeadOfState;

# More Queries (city table)
-- Find the least populated city.
select name 
from city 
order by population 
limit 1;
-- Find all cities with a population above one million people.
select name 
from city 
where population > 1e6;
-- Find all cities that begin with Kal.
select name 
from city 
where name like 'Kal%';
-- Find all cities with a population in the range 670,000 to 700,000
select name 
from city 
where population between 670000 and 7000000;
-- Find the 10 most populated cities. Order the data by population from the most populated to the least populated city (descending order). Hint: limit the output with the LIMIT clause.
select name 
from city 
order by population desc 
limit 10;
-- Find the 10 least populated cities. Order the data by population from the most populated to the least populated city (ascending order).
select name 
from city 
order by population 
limit 10;
-- Find all Cities that belong to the New York District. Display the Name, District and Population fields.
select name, district, population 
from city 
where district like 'New York';
-- Find the population of each district in the USA.
select name, population 
from city where CountryCode = ( 
		select distinct code 
		from country 
        where name like 'United States'
	);

# More Queries (country table)
-- How many countries are in this table?
select count( distinct name ) 
from country;
-- Which country has the largest population?
select name 
from country 
order by population desc 
limit 1;
-- Which country has the smallest population?
select name 
from country 
order by population 
limit 1;
-- Find all countries with a population above five million people.
select name 
from country 
where population > 5000000;
-- Display the countries grouped by region. (limit to show only the first 40 records).
select name, region 
from country 
group by region 
limit 40;
-- Display the countries grouped by continents. (limit to 40 records).
select continent, name 
from country 
group by continents 
limit 40;
-- What is the average life expectancy of each of the continents?
select continent, avg(LifeExpectancy) 
from country
group by continent;
-- Display the capital of each African country together with the countries population in ascending order.
select country.name, city.name 
from country inner join city on country.capital = city.id 
where country.continent = 'Africa';
-- What is the country with the largest surface area?
select name 
from country 
order by SurfaceArea desc 
limit 1;
-- Display the surface area of each of the continents.
select continent, sum(SurfaceArea) as surface_area
from country
group by continent
order by surface_area;