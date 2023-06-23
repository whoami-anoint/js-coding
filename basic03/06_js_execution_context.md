# JavaScript Execution Context

1. Global Execution Context
-> this
    {}

2. Function Execution Context

3. Eval Execution Context (Property of Global Execution)

## Two phases
{} ->
- Memory <b>Creation Phase</b>
- Execution Phase

```
let val1 = 10
let val2 = 5

function addNum(num1,num2){
    let total = num1 + num2
    return total
}

let result1 = add(val,val2)
let result = add(10,2)
```

### Memory Phase
- val1 ->  undefined
-  val -> undefined
- addnum -> defination
- result1 -> undefined
- result2 -> undefined

### Execution phase
- val1 -> 10
- val2 -> 5
- addNum -> new variable environment + execution thread 


## Call Stacks

* three()
* two()
* one()

Global Execution

- [ ] Last In First Out (LIFO)

