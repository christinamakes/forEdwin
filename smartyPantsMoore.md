## QUESTION 2 -- secure


## QUESTION 3
*The first link on the top of this question goes to the wrong place!*
I must admit I have never worked with recursive CTE queries, but they seem very useful and interesting. I have done lots of reading on the subject and have come up with a rough solution in sudo-code: 

```
WITH RECURSIVE last_run(parent_id, id_list, name_list) AS (
```

```
SELECT id_list, name_list
FROM last_run
```

```
WHERE ORDER BY id_list;
ROLLBACK;
```

## QUESTION 4
Rotation should work in Internet Explorer, Edge, Firefox, Opera, and Chrome


## QUESTION 5
In my opinion the pros of TDD outweigh the cons, especially when the code base will have to be maintained for years down the road. I think the biggest con to TDD is the time and dedication it takes to write the tests. Some aspects of code are difficult to mock and getting caught up in making the test pass can sometimes take more time than it's worth. However, if you have a good test suite to fallback on, rarefaction the code becomes much easier because you will immediately know if it works or not. Additionally the test suite will prevent careless mistakes from breaking an otherwise working piece of code.

For companies that are just starting out and are pushing new features constantly TDD might only slow the team down; however, that team must decide if they would rather slow down deployment and write tests or roll out all their new features and then write tests, the harder option, in my opinion.

## QUESTION 6