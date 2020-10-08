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
  public jobTitle: string = ''
  public date: Date = new Date();
  public bulletPoint1 = ``
  public bulletPoint2 = ``
  public bulletPoint3 = ``
  public mainString = ``;

  public firstLine = `Dear Hiring Manager,`
  public firstParagraph = `This letter is to express my interest in your posting on LinkedIn.com for the position of an experienced ${this.jobTitle} .  With a Master’s degree in Electrical and Computer Engineering, as well as over three years hands-on experience working in the Canadian tech space, 
  I am confident I will be an asset to the organization. `
  public secondPara = `I am someone who continually seeks challenge and greatly enjoy learning new things and working on projects which require me to work outside my comfort zone. I enjoy learning new languages and frameworks in the web development sphere, as over the past two years in the field, I have worked with a number of technologies and am equally comfortable working in the front end as well as the back. At my current workplace (Big 5 Bank in Toronto – Capital Markets), I have worked to redesign and redevelop the existing customer administration modules of our Online Banking for Business platform, adhering to web accessibility guidelines and industry best practices. Aside from that, I have also worked on projects related to mitigating security vulnerabilities for the online banking platform as well as fraud mitigation through integrating IBM Trusteer Pinpoint API into the current product flow. `
  public thirdPara = `Your listed requirements match my background and skill. A few I would like to highlight that would enable me to contribute to your bottom line are:`
  public fourthPara = `Aside from professionally, my hobbies are also testament to my inquisitive and hardworking nature. I am an internationally published short story author. Details of my writing can be found at my website linked here.`
  public fifthPara = `I have attached a copy of resume which details my projects and experience in software development. I can be reached anytime via cell phone at 6476852560 or email at zubierabd@gmail.com`
  public finalPara = 'Thank you for your time and consideration for my application. I look forward to hearing from you. '

  public name = 'Zubier Abdullah'

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

    this.showResponse = true;
  }
}
