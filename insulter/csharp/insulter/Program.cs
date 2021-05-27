using System;
using System.Collections.Generic;

namespace insulter
{
    class Program
    {
        static void Main(string[] args)
        {
            List<string> Insults = new List<string>{
            "You look like what morning breath smells like.",
            "If you tried to give me cpr I would probably throw myself back under water",
            "I am not a fan of you",
            "You think you're so special...and you are. The fact of your existence is nearly impossible to believe",
           "I'd rather walk than be on the same plane as you",
            "If I were given a million dollars to hang out with you...I would, but then I'd have to spend half of it on therapy",
            "I am not a fan of you"
            };

            List<int> Indexed = new List<int>();
           
            Random r = new Random();

            while (Indexed.Count < 3)
            {
                int candidate = r.Next(0, Insults.Count - 1);
                if (!Indexed.Contains(candidate))
                {
                    Indexed.Add(candidate);
                }
            }

            for (int i = 0; i < Indexed.Count; i++)
            {
                int index = Indexed[i];
                Console.Write(Insults[index]);
            }



        }
    }
}
