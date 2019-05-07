import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Resume';
  x= new Promise((resolve,reject)=>{
    setTimeout(()=>{
      console.log(`x is executed`);
      resolve('x is done')
    },4000)
  });
  y= new Promise((resolve,reject)=>{
    resolve('y is done')
  });


  ngOnInit(){
    this.fu();
    console.log('yes');
  }
  async fu(){     
  const t = await this.x;
  const o = await this.y;
  console.log(t,o);

  }

}

