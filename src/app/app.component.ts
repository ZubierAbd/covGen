import { Component } from '@angular/core';

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
  public firstParagraph = `This letter is to express my interest in your posting on LinkedIn.com for the position of an experienced ${this.jobTitle} .  With a Master’s degree in Electrical and Computer Engineering, as well as over ${this.yearsOfExp} years hands-on experience working in the Canadian tech space, 
  I am confident I will be an asset to your organization. `
  public secondPara = `I am someone who continually seeks challenge and greatly enjoy learning new things and working on projects which require me to work outside my comfort zone. 
  I enjoy learning new languages and frameworks in the web development sphere, as over the past two years in the field, I have worked with a number of technologies and am equally comfortable working in the front end as well as the back. 
  At my current workplace (Big 5 Bank in Toronto – Capital Markets), I have worked to redesign and redevelop the existing customer administration modules of our Online Banking for Business platform, adhering to web accessibility guidelines 
  and industry best practices. Aside from that, I have also worked on projects related to mitigating security vulnerabilities for the online banking platform as well as fraud mitigation through integrating IBM Trusteer Pinpoint API into the current product flow. `
  public thirdPara = `Your listed requirements match my background and skill.`
  public fourthPara = `Aside from professionally, my hobbies are also testament to my inquisitive and hardworking nature. I am an internationally published short story author. Details of my writing can be found at my website linked here.`
  public fifthPara = `I have attached a copy of resume which details my projects and experience in software development. I can be reached anytime via cell phone at ${this.phoneNo} or email at ${this.email}`
  public finalPara = 'Thank you for your time and consideration for my application. I look forward to hearing from you. '

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

    this.firstParagraph = `This letter is to express my interest in your posting on LinkedIn.com for the position of an experienced ${this.jobTitle} ${this.companyName ? " at " + this.companyName : ''}.  With a Master’s degree in Electrical and Computer Engineering, as well as over ${this.numberWordMap[this.yearsOfExp]} years hands-on experience working in the Canadian tech space, 
    I am confident I will be an asset to the organization. `
    this.bulletPoint1 = this.bulletPoint1
    this.bulletPoint2 = this.bulletPoint2
    this.bulletPoint3 = this.bulletPoint3
    this.fifthPara = `I have attached a copy of resume which details my projects and experience in software development. I can be reached anytime via cell phone at ${this.phoneNo} or email at ${this.email}`
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
