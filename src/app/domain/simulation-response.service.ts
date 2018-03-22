import {Injectable} from '@angular/core';

@Injectable()
export class SimulationResponseService {

  getSimulationResponse(): any {
    let answers = {
      negative : {
        impossible : {
          title :"Sorry your incomes and savings cannot allow you to achieve this goal or to get a loan",
          content : "Sorry your incomes and savings cannot allow you to achieve this goal or to get a loan"
        },
        shortPeriod: {
          loan : {
            title: "Your actual situation can't allow to to achieve your goal in the date wanted, you can apply for a loan from ING or another bank",
            Content : "Your actual situation can't allow to to achieve your goal in the date wanted, you can apply for a loan from ING or another bank"
          },
          extendPeriod : {
            title : "The actual configuration of the goal and your financial situation doesn't allow you to achieve your goal in the date wanted please extend the date to make it possible",
            content :"The actual configuration of the goal and your financial situation doesn't allow you to achieve your goal in the date wanted please extend the date to make it possible"
          }
        }
      },
      positive : {
        title : "Congratulation, your goal is possible",
        content : "Don't forget to take insurance to be covered in case of unexpected issues. ING has a set of products that can answer to your different needs and situations. \n If you still have more saving account you don't need you can open an investment account. With ING investment pays from 3% to 10%  depending gon the risk profile "
      }
    }
  }

}
