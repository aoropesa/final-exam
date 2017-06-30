Questions

1-What are the four steps of mergesort?
step1 split array in half
step2 mergesort left half
step3 mergesort right half
step4 combine halve

2-Using JavaScript, generate a random number between 50 and 100.
50 + Math.random() * 50

3-Using Javascript, generate a random number between -100 and 100.
-100 + Math.random() * 200

4-Write a coin flip function. It should return the string "heads" half the time and the string "tails" the other half

  function coinFlip(){
    let num = Math.random();
    if(num<0.5) return "heads";
    return "tails";
  }

5-Re-state the following expression without using negation: !(10 > x)
(10<=x)

6-Re-state the following expression without using negation: !(a > 10 && b <= 5)
(a<=10 || b>5)

7-Re-state the following expression without repeating variable a: (a && x <= 10) || (a && y < 0)
a && (x<=10 || y<0)

8-Re-state the following expression without negations: !( (a > 10) || (b > 10) || (c > 10) || (isAdmin) )
(a<=10) && (b<=10) && (c<=10) && (!isAdmin)

9-Write a function which, given a 2-d array of strings, returns the concatenation of all the strings.

  function twodconcat(arr){
    let str = '';
    for(var i=0;i<arr.length;i++){
      for(var j=0;j<arr[i].length;j++){
        str+=str.concat(arr[i][j]);
      }
    }
    return str;
  }

10-Write a function which, given a 2-d array and another value x,
 returns true if x is present in the 2-d array, and false otherwise.
  function containsElement(arr, x){
    for(var i=0;i<arr.length;i++){
      for(var j=0;j<arr[i].length;j++){
        if(arr[i][j]==x) return true;
      }
    }
    return false;
  }
11-Write a 'function' which, given an two sorted arrays of sizes m and n,
 returns a larger sorted array of size m+n. This 'function' must work in O(m+n) time.

 function merge(arr1,arr2){
   var arr = []
   var lhs = 0, rhs = 0;
   while (lhs + rhs < arr1.length + arr2.length) {
     if(!arr2[rhs] || arr[1] <= arr2[rhs]{
       arr.push(arr1[lhs])
       lhs++;
     }
     else if(!arr1[lhs] || arr1[lhs] > arr2[rhs]){
       arr.push(arr2[rhs])
       rhs++
     }
   }
   return arr;
 }


12-Given the following edge list, draw the graph.
 Use MS Paint and include the file in your repo.
E = [[1,2], [2,3], [4,5], [2,4], [1,5]  ]


13-Given the following adjacency Matrix, determine whether the graph is directed or undirected and draw it.
directed graph
M = [
  [0,0,1,0,1],
  [0,0,0,0,1],
  [0,1,0,0,0],
  [0,1,0,0,0],
  [0,0,0,0,1],
]
14-For exercises 9 and 10, if you assume that n is the size of one side of the matrix,
what is the time complexity (Big Oh) of the algorithms you wrote?
9-O(n^2)
10-O(n^2)

15-What is the time complexity of the following 'function'?
O(n)
  function thugPop(arr){
    var ret = [];
    for (var i === 0; i < arr.length; i++){
      if (arr[i] % 15 == 0) ret.push('thugPop');
      else if (arr[i] % 5 == 0) ret.push('thug');
      else if (arr[i] %3 == 0 ) ret.push('pop');
      else ret.push(arr[i]);
    }
    return ret;
  }
16-What is the time complexity of the following 'function'?
O(n^2)
  function thugify(schoolList){
    return schoolList.map(function(schoolObj){
      var school = Object.assign({}, schoolObj);
      school.students.forEach(function(student){
        if (Math.random() > 0.5){
          student.lastName += 'dogg';
        }
        else {
          student.firstName = "lil' "+ student.firstName;
        }
      });
    });
  }
17-What is the time complexity of the following 'function'?
O(logarithmic)
  function countRepeats(strArr){
    var repeats = 0;
    strArr.forEach(function(str, index){
      var currentRepeats = strArr.filter(function(innerStr, idx){
        return (innerStr === str && index != idx)
      });
      if (currentRepeats.length > 0){
        repeats++;
      }
    });
    return repeats;
  }
18-What are the main operations of a stack?
push,pop,size and peek.

19-What are the main operations of a queue?
enqueue, dequeue, size and peek

20-What is the runtime of bubblesort? How does it work?
Use the formula n-1.  Where n = the number of elements in the array.
adjacent pairs of objects in the array.  If the objects are not in the correct ordered, they are swapped so that the largest of the two moves up.  This process continues until the largest of the objects, eventually "bubbles" up to the highest position in the array.  After this occurs, the search for the  next largest object begins.  The swapping continues until the whole array is in the correct order.

21-Create a personal website and upload it so that it is accessible at yourdomain.fvi-grad.com.
aoropesa.fvi-grad.com
The website must have your name, contact information, skills, and at least two links to portfolio items you are hosting on fvi-grad.
The website must not be in a subdirectory of the document root. ie. It needs to be accessible by going to yourusername.fvi-grad.com/ without anything after the slash.
You can and should use a template
Include the link to your website in your answers document
