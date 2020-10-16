import { Component } from '@angular/core';
import zubier from '../assets/json/zubier.json'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'covGen';
  public response: string = ''
  public showResponse: boolean = false;
  public showSpinner = false;

  /**Variables for the ngModel to work on */
  public jobTitle: string = ''
  public date: Date = new Date();
  public bulletPoint1 = ``
  public bulletPoint2 = ``
  public bulletPoint3 = ``
  public mainString = ``;
  public yearsOfExp = '';
  public addressee = 'Hiring Manager';
  public email = ''
  public phoneNo = ''
  public companyName = ''

  public addresseArray = ['Dear Hiring Manager', 'Dear Hiring Team', 'Dear Human Resources Department', 'Dear Recruiting Department for [Company Name]', 'Dear [Company Name] Recruiter']


  public firstLine = this.addresseArray[Math.floor(Math.random() * this.addresseArray.length) + 1] + ' ,'
  public firstParagraph = ` `
  public secondPara = zubier.secondP
  public thirdPara = zubier.thirdP
  public fourthPara = zubier.fourthP
  public fifthPara = ``
  public finalPara = zubier.finalP

  public name = ''

  generateCoverLetter() {
    /**Added for testing purposes */
    if (this.jobTitle === '') {
      this.jobTitle = 'Software Developer'
    }
    if (this.bulletPoint1 === '') {
      this.bulletPoint1 = 'Experience building customer facing projects using SPA frameworks such as Angular and React, as well as Redux and Node JS'
    }
    if (this.bulletPoint2 === '') {
      this.bulletPoint2 = 'Strong leadership capabilities having experience managing in my previous role at Research Money as well as current role which involves coordinating work with team of offshore developers'
    }
    if (this.bulletPoint3 === '') {
      this.bulletPoint3 = 'Familiarity with debugging and deploying enterprise level scalable web applications'
    }
    if (this.name == '') {
      this.name = 'Zubier Abdullah'
    }
    if (this.companyName === '') {
      this.companyName = 'Tesla'
    }
    if (this.phoneNo == '') {
      this.phoneNo = 'XXXXXXX2560'
    }
    if (this.email == '') {
      this.email = 'zubierabd@gmail.com'
    }
    if (this.yearsOfExp == '' || this.yearsOfExp == undefined) {
      this.yearsOfExp = '3'
    }

    //Making replacements for paragraph one

    this.firstParagraph = zubier.firstP
    this.firstParagraph = this.firstParagraph.replace('_jobTitle_', this.jobTitle)
    this.firstParagraph = this.firstParagraph.replace('_yearsExp_', this.numberWordMap[this.yearsOfExp])


    this.bulletPoint1 = this.bulletPoint1
    this.bulletPoint2 = this.bulletPoint2
    this.bulletPoint3 = this.bulletPoint3
    ///Making replacements for fifth paragraph
    this.fifthPara = zubier.fifthP
    console.log(this.fifthPara)
    this.fifthPara = this.fifthPara.replace('_email_', this.email)
    this.fifthPara = this.fifthPara.replace('_phoneNo_', this.phoneNo)
    // this.yearsOfExp = this.numberWordMap[this.yearsOfExp]
    this.name = this.name;
    this.showSpinner = true;
    this.showResponse = true;
    setTimeout(() => {
      this.showSpinner = false;
    }, 2000)
  }

  reset() {
    this.jobTitle = ''
    this.bulletPoint1 = ''
    this.bulletPoint2 = ''
    this.bulletPoint3 = ''
    this.name = ''
    this.yearsOfExp = ''
    this.showSpinner = true;
    setTimeout(() => {
      this.showSpinner = false
      this.showResponse = false
    }, 1000)

  }

  numberWordMap = {
    "1": "one",
    "2": "two",
    "3": "three",
    "4": "four",
    "5": "five",
    "6": "six",
    "7": "seven",
    "8": "eight",
    "9": "nine",
    "10": "a decade",
    "11": "eleven",
    "12": "twelve",
    "13": "thirteen"
  }
}
