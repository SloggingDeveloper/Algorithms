'use strict';

export class BirthDayParadox {

    calculateMinimumNumberOfPeopleTwoHaveSameBirthDate(probabilityOfOccuranceSameBirthDate : number){
      let  probabilityOfNonOccuranceOfSimilarDate = 1 - probabilityOfOccuranceSameBirthDate;
      let currentProbabilityOfNonOccuranceOfSimilarDate = 1
      let count = 0;
      while(currentProbabilityOfNonOccuranceOfSimilarDate > probabilityOfNonOccuranceOfSimilarDate)
      {         
        currentProbabilityOfNonOccuranceOfSimilarDate = currentProbabilityOfNonOccuranceOfSimilarDate * ((365 - count)/(365));
        count++;
      }

      return count;
      
    }

    calculateMinimumNumberOfPeopleTwoHaveSameBirthDateByEquation(probabilityOfOccuranceSameBirthDate : number){
        /*
          from above method we see that the probalility can be expressed as equation
          Pr(E1) = 1*((n-1)/n)....((n-k+1)/n)
          Pr(E1) = 1*(1- 1/n)*(1 - 2/n)......(1- (k-1)/n);
          1 + x >= e^x
          Pr(E1) <= e^(-k(k-1)/2n)
          1/2 (Pr(E1 should be at most 1/2 for 50% probability))
         ln(1/2) >=-k(k-1)/2n;
         2nln(1/2) >= -k(k-1)
         2nln(2) <=k(k-1)
         solving quadratic equation
         k >= (1 + sqrt(1 + 8nln2))/2;
         solving for n = 365
        */
      let  probabilityOfNonOccuranceOfSimilarDate = 1 - probabilityOfOccuranceSameBirthDate;
      
      return Math.ceil((1 + Math.sqrt(1 + ((8 * 365)*Math.log(1/probabilityOfNonOccuranceOfSimilarDate) )))/2);

    }
}