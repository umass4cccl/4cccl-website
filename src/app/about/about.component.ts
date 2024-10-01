import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Import CommonModule

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  standalone: true,
  imports: [CommonModule] // Include CommonModule here
})
export class AboutComponent {
  eBoardMembers = [
    {
      name: 'Rida El Chami',
      photo: 'assets/rida.png',
      role: 'President', 
      description: `Marhaba everyone! I'm Rida El Chami, the founder/President of 4CCCL. I am a junior at UMass Amherst, majoring in Biology on the Pre-Med track. A fun fact about me is that I learned Turkish by watching Turkish dramas. Even after moving to the US, my heart remains beating within the resilient trees of my country.`
    },
    {
      name: 'Tamara Turk',
      photo: 'assets/tamara.png',
      role: 'Vice President', 
      description: `I'm Tamara, a biochemistry and molecular biology senior at UMass Amherst. I am also an aspiring physician, hoping to one day be able to directly support Lebanon's resilient yet overburdened healthcare system. I joined 4CCCL to contribute to Lebanon's healthcare system in any way I can by assisting Lebanese families and raising awareness for our cause.`
    },
    {
      name: 'Nicholas Yazbek',
      photo: 'assets/nick.png',
      role: 'Secretary', 
      description: `Hey guys! My name is Nick, and I am the UMass4CCCL secretary. I am currently a senior pursuing a dual degree in Pure Physics and Applied Mathematics and minoring in Computer Science at UMass Amherst. A fun fact about me is that I am a professional drummer!`
    },
    {
      name: 'Noura Nasah',
      photo: 'assets/noura.png',
      role: 'Social Media Coordinator',
      description: `Hi everyone! I'm Noura, a junior majoring in Operations and Information Management with certificates in Real Estate and Data Analytics. As one of the Social Media Coordinators for UMass4CCCL, I joined because, as Lebanese people, we believe in helping wherever, whenever, and however we can. Fun fact: my favorite show is Modern Family!`
    },
    {
      name: 'Emma Azzi',
      photo: 'assets/emma.png',
      role: 'Web Developer/Social Media Coordinator',
      description: `Hello everyone!! My name is Emma, a current senior studying computer science and math at UMass Amherst! I am the web developer and social media coordinator for 4CCCL. In my free-time I enjoy playing and watching soccer! I am excited to be a part of this club and make a differece in the ways that I can for the country that I love! :)`
    },
    {
      name: 'Georges Chebly',
      photo: 'assets/georges.png',
      role: 'Treasurer', 
      description: `Hi everyone, I'm Georges. I am a Mechanical Engineering major committed to helping children in Lebanon. I am the treasurer of 4CCCL. Fun fact about me: I have only been skiing once in my life (in the picture)!`
    },
    // {
    //   name: 'Adam Farhat',
    //   photo: 'assets/adam.png',
    //   role: 'Treasurer', 
    //   description: 
    // },
    {
      name: 'Spencer Masoud',
      photo: 'assets/spencer.png',
      role: 'Ambassador', 
      description: `Hello, my name is Spencer Masoud and I am an ambassador for 4CCCL. I am a second year pre-med student majoring in biochem and economics. A fun fact about me is that I can speak French, Arabic, and German.`
    }, 
    {
      name: 'Munir Safwan',
      photo: 'assets/munir.png',
      role: 'Ambassador',
      description: `Hi, my name is Munir and I'm an ambassador for 4CCCL. I'm a second year computer engineering major, and I love chipotle, açaí bowls, and doner kebabs!`
    }
  ];
}
