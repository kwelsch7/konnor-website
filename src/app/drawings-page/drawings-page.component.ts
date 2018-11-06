import { Component, OnInit } from '@angular/core';
import { GalleryItem } from '../models';

@Component({
  selector: 'app-drawings-page',
  templateUrl: './drawings-page.component.html',
  styleUrls: ['./drawings-page.component.scss']
})
export class DrawingsPageComponent implements OnInit {
  galleryItems: GalleryItem[] = [
    {
      date: 'Dec 2015',
      description: `I drew this one by mouse when a friend walked away from their computer. Hence the non-original file.
                    I'm pretty proud of what I've been able to accomplish while drawing with a mouse before people wander back.`,
      imageLink: 'assets/drawings/jurassic_world.jpg',
      medium: 'MS Paint',
      tags: ['doodle', 'paint'],
      title: 'Jurassic World',
    },
    {
      date: 'April 2017',
      description: `I took a couple design classes (my major was Computer Science) to test the waters, and in one we
                    got a basic intro to Adobe Illustrator, Photoshop, and InDesign. Unlike my CS assignments with rigid
                    acceptance criteria, I had more freedom to be creative and decide myself when my work was satisfactory.
                    So that was a fun change of pace.`,
      imageLink: 'assets/drawings/svg_portrait.jpg',
      medium: 'Adobe Illustrator',
      tags: ['svg', 'Illustrator'],
      title: 'SVG Self Portrait',
    },
    {
      date: 'Feb 2009',
      description: `An exemplary young fellow. Back when I had a working tablet.`,
      imageLink: 'assets/drawings/friendly_popsicle.png',
      medium: 'Adobe Photoshop',
      tags: ['doodle', 'Photoshop'],
      title: 'Friendly Popsicle',
    },
    {
      date: 'Oct 2006',
      description: `I cleaned up an image of the Day's Pay plane for the side of our High school
                    Marching band trailer. We projected the black-and-white picture onto the side of
                    the trailer, and we and a few others traced it with yellow paint.`,
      imageLink: 'assets/drawings/band_trailer.jpg',
      medium: 'Paint',
      tags: ['paint', 'Photoshop'],
      title: 'Band Trailer',
    },
    {
      date: 'May 2017',
      description: `I had a friend stand in the same spot taking pictures while I moved around in weird poses.
                    A few of those and a little splicing, and voila! Lots of me.`,
      imageLink: 'assets/drawings/campus_clone.jpg',
      medium: 'Adobe Photoshop',
      tags: ['Photoshop'],
      title: 'Campus Clone',
    },
    {
      date: 'Jun 2015',
      description: `One of the first of a long line of ongoing back-and-forth sticky note doodles with a coworker.
                    The initial theme was cats, but it branched out. A tiny book was created out of the original stickies.`,
      imageLink: 'assets/drawings/cat_popsicle.jpg',
      medium: 'Pen',
      tags: ['doodle'],
      title: 'Cat Popsicle',
    },
    {
      date: 'May 2017',
      description: `It's subtle, but I put my face over Napoleon's. Probably looks too natural to be noticeable.
                    You're just jealous because I've been... never mind.`,
      imageLink: 'assets/drawings/face_swap.jpg',
      medium: 'Adobe Photoshop',
      tags: ['Photoshop'],
      title: 'Face Swap',
    },
    {
      date: 'Feb 2009',
      description: `The original intent of this piece was to make a caricature of my cousin when he gets a little older.
                    It's hard to say where the line is drawn between exaggeration and reality. Subtle detail: the watch
                    face has Lego brick pegs on it. For whatever reason.`,
      imageLink: 'assets/drawings/lego_nerd.png',
      medium: 'Adobe Photoshop',
      tags: ['doodle', 'Photoshop'],
      title: 'Lego Nerd',
    },
    {
      date: 'Mar 2007',
      description: `The date I drew this is kind of a guess. Hopefully an educated one. Anywho, this was (obviously)
                    part of a larger picture I ended up scrapping. I liked the moon though, apparently. I do wish
                    I gave it more contrast, though. That was always a failing of mine back in the day.`,
      imageLink: 'assets/drawings/moon_pencil.jpg',
      medium: 'Pencil',
      tags: [],
      title: 'Moon Pencil',
    },
    {
      date: 'Apr 2010',
      description: `This is one of several drawings I've done of my teachers during a class. I liked drawing based off
                    of actual people, but most people find it rude to stare. Teachers, however, are a captive audience.
                    So here's a picture of my Music History teacher saying something he always said.`,
      imageLink: 'assets/drawings/music_teacher.jpg',
      medium: 'Pencil',
      tags: [],
      title: 'Music Teacher',
    },
    {
      date: 'Jun 2015',
      description: `Part of a sticky note series with an old coworker. He found it on the bottom part of his monitor.
                    In fact, if you look closely, you can even see the green glow of the "turned-on" light shining
                    through Regal Cat's forehead.`,
      imageLink: 'assets/drawings/regal_cat.jpg',
      medium: 'Pen',
      tags: ['doodle'],
      title: 'Regal Cat',
    },
    {
      date: 'Feb 2015',
      description: `An artist's rendering of what I would look like with a beard. There was a growing curiosity among my
                    inner circle, so I put it to rest with this little number. (I actually did attempt it over the next
                    month or so, but it was a no-go. Never again.)`,
      imageLink: 'assets/drawings/self_beard.jpg',
      medium: 'Pen',
      tags: [],
      title: 'Bearded Self',
    },
    {
      date: 'Feb 2007',
      description: `I had an internal (and inconsistent) comic idea going on with a friend about some marching band kids.
                    There was a character named "Darth Sousa", so that alone held some promise. So here's some individual
                    panel I drew of a back-alley encounter with the drum major. Yup.`,
      imageLink: 'assets/drawings/trumpet_action.jpg',
      medium: 'Pencil',
      tags: [],
      title: 'Trumpet Action',
    },
  ].sort((item1, item2) => {
    if (item1.title > item2.title) {
      return 1;
    }
    if (item1.title < item2.title) {
      return -1;
    }
    return 0;
  });

  filteredItems: GalleryItem[] = this.galleryItems;

  constructor() { }

  ngOnInit() { }

  onFilterApplied(filteredItems: GalleryItem[]) {
    this.filteredItems = filteredItems;
  }

}
