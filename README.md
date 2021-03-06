## QUESTION 1 
See question1.js


## QUESTION 2 
There are many different ways to keep a Unix/Linux system secure. More general security tips include keeping your system up to date, and adding a limited user account to keep the root user secure. Other options include configuring a firewall with iptables, disallowing root logins over SSH, and banning IP addresses after failed login attempts. If the server contains very private information, the iptables could be configured to DROP or REJECT every ip address except the anticipated address and only maintain established output connections. 

## QUESTION 3
*The first link on the top of this question goes to the wrong place!*
I must admit I have never worked with recursive CTE queries, but they seem very useful and interesting. I have done lots of reading on the subject and have come up with a rough solution: 

```
WITH RECURSIVE last_run(parent_id, id_list, name_list) AS (
SELECT id, ARRAY[id] as id_list, name
FROM category
WHERE parent_id IS NULL

UNION ALL

SELECT cat.parent_id, id_list || cat.id, name_list || ', ' || cat.name
FROM last_run run, category cat
WHERE cat.id = run.parent_id
...
```

## QUESTION 4
See question4.html / .css / .js


Rotation should work in Internet Explorer, Edge, Firefox, Opera, and Chrome


## QUESTION 5
In my opinion the pros of TDD outweigh the cons, especially when the code base will have to be maintained for years down the road. I think the biggest con to TDD is the time and dedication it takes to write the tests. Some aspects of code are difficult to mock and getting caught up in making the test pass can sometimes take more time than it's worth. However, if you have a good test suite to fallback on, rarefaction the code becomes much easier because you will immediately know if it works or not. Additionally the test suite will prevent careless mistakes from breaking an otherwise working piece of code.

For companies that are just starting out and are pushing new features constantly TDD might only slow the team down; however, that team must decide if they would rather slow down deployment and write tests or roll out all their new features and then write tests, the harder option, in my opinion.

## QUESTION 6
I think these two will always be my favorite


![](https://imgs.xkcd.com/comics/wisdom_of_the_ancients.png)

![](https://imgs.xkcd.com/comics/standards.png)

ps: go tigers! ![](https://secure.touchnet.com/C21519_ustores/web/uploaded_images/mall/TU_New_Logo.jpg)