import { Component } from '@angular/core';
// import { TranslateService } from './translate';

@Component({
    moduleId: module.id,
    selector: 'app-root',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.css'],
    directives: []
})
export class AppComponent {
    // public margin = -618 //-618;

    SWIPE_DIRECTION = { LEFT: 'swipeleft', RIGHT: 'swiperight' };

    avatars = [
        {
            name: 'elyse',
            image: 'a-elyse.png',
            visible: true
        },
        {
            name: 'matthew',
            image: 'a-matthew.png',
            visible: false
        },
        {
            name: 'molly',
            image: 'a-molly.png',
            visible: false
        },
        {
            name: 'jenny',
            image: 'a-jenny.jpg',
            visible: false
        }
    ];
    
    swipe(currentIndex: number, direction: string = this.SWIPE_DIRECTION.LEFT) {
        console.log(currentIndex);
        if (currentIndex > this.avatars.length || currentIndex < 0) return;

        let nextIndex = 0;

        if (direction === this.SWIPE_DIRECTION.RIGHT) {
            const isLast = currentIndex === this.avatars.length - 1;
            nextIndex = isLast ? 0 : currentIndex + 1;
        }

        if (direction === this.SWIPE_DIRECTION.LEFT) {
            const isFirst = currentIndex === 0;
            nextIndex = isFirst ? this.avatars.length - 1 : currentIndex - 1;
        }

        // toggle avatar visibility
        this.avatars.forEach((x, i) => x.visible = i === nextIndex ? true : false);
    }

    // ngOnInit() {

        // this.trans.currentLang = 'zh';
        // this.trans.setDefaultLang('zh');
        // this.trans.enableFallback(true);

        // this.trans.onLangChange.subscribe(x => console.log(x));

        // this.trans.use('en');
        // this.trans.use('zh');

        // console.log(this.trans.instant('hello greet', ['ms.', 'jecelyn']));

    // }

    // panIt(e: any, img: HTMLImageElement) {
    //     // document.getElementById('me')

    //     const margin = this.margin; // +img.style.marginLeft.replace('px', '');
    //     var delta: number = margin + e.deltaX;

    //     console.log(e, img, margin, delta);
    //     console.log(delta, margin);
    //     if (delta >= -1750 && delta <= -150) {
    //         // img.style.marginLeft = margin + e.deltaX
    //         this.margin = margin + e.deltaX;
    //     }
    // }

    // trigger(e: any) {
    //     console.log(e);
    // }

    
    
}
