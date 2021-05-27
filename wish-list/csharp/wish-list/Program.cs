using System;
using System.Collections.Generic;

namespace wish_list
{
    class Program
    {
        static void Main(string[] args)
        {
           List<string> WishList = new List<string>();
           WishList.Add("An original eight track of William Shatner's 'Lucy in the Sky with Diamonds'");    
          WishList.Add("The ability to think of interesting wishes on short notice");   
           WishList.Add("A washtub of Skittles");   
           WishList.Add("World peace, but not the kind of world peace where all the humans are removed from existence");  
            WishList.Add("A TV that is NOT internet-capable"); 
             WishList.Add("The ability to fly, but, like, really fast...not just, like, how fast I can walk, but, like, fast, you know?"); 
             
             Console.WriteLine("My wishes...");
             
             foreach (string wish in WishList){
                  Console.WriteLine(wish);
             }

        }

    }
}
