import React, { useState, useEffect } from "react";
import img1 from '../../images/img1.jpg'
import './index.css';
let img2 = require('../../images/img2.jpeg')
let img3 = require('../../images/img3.jpg')
let img4 = require('../../images/img4.jpg')
let img5 = require('../../images/img5.jpg')

let imgs = [{ src: img4 }, { src: img5 }, { src: img1 }, { src: img2 }, { src: img3 }, { src: img4 }, { src: img5 }, { src: img1 }, { src: img2 }]

function Swiper() {
    const [active, setActive] = useState(3)
    const [position, setPosition] = useState(-500)
    let realImgLengt = imgs.length
    let imgLengt = imgs.length - 4
    useEffect(() => {
        if (active == realImgLengt - 1) {
            setActive(imgLengt - 2)
            setPosition(-500)
        } else if (active == 1) {
            setActive(imgLengt + 1)
            setPosition(-imgLengt * 200 - 100)
        }
    }, [active])
    return <div className='swiper'>
        <ul style={{ left: position + 'px' }} >
            {imgs.map((item, index) => {
                return <li key={index + 1}>
                    <img className={active == index ? 'img_active' : 'img_nomol'} src={item.src} />
                </li>
            })}
        </ul>
        <div className='pagenation'>
            {imgs.slice(2, 7).map((page_item, page_index) => {
                return <div key={page_index + 1} className={(active - 3) < 0 ? active + 2 == page_index ? 'item item_active' : 'item' : active - 3 == page_index ? 'item item_active' : 'item'}>  </div>
            })
            }
        </div>
        <div className='btn left' onClick={() => { setActive(active - 1); setPosition(200 + position) }}>上一张</div>
        <div className='btn right' onClick={() => { setActive(active + 1); setPosition(-200 + position) }}>下一张</div>
    </div>
}


/**
  * 移动端通过touch事件来判断用户是左滑 还是右滑
  * U 阀值  小于该值则不触发滑动
  * x1 x2  水平位置移动前后的坐标
  * y1 y2  垂直位置移动前后的坐标
  */
const getSwipeWay = (U) => (x1, x2, y1, y2) => {
    const X = x2 - x1;
    const Y = y2 - y1;
    const { abs } = Math;

    if (abs(X) < abs(U) && abs(Y) < abs(U)) {
        return false;
    }

    if (abs(Y) > abs(X) && Y < 0) {
        return 'Up';
    }

    if (abs(Y) > abs(X) && Y > 0) {
        return 'Down';
    }

    if (abs(Y) < abs(X) && X > 0) {
        return 'Right';
    }

    if (abs(Y) < abs(X) && X < 0) {
        return 'Left';
    }

}

touchStart = (e) => {
    const { clientX, clientY } = e.touches[0];
    this.position.x1 = clientX;
    this.position.y1 = clientY;
}
touchEnd = (e) => {
    const { clientX, clientY } = e.changedTouches[0];
    this.position.x2 = clientX;
    this.position.y2 = clientY;

    const { x1, x2, y1, y2 } = this.position;

    const direction = this.getSwipeWay(x1, x2, y1, y2);

    if (direction === 'Left') {
        //同点击上一张btn逻辑
    }

    if (direction === 'Right') {
        //同点击下一张btn逻辑
    }
}

export default Swiper;