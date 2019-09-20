import React, { Component } from "react"

class ScrollToggle extends Component {
    constructor() {
        super();
        this.state = {
            scrolled: false,
        };
    }
    
    componentDidMount() {
        window.addEventListener('scroll', () => {
            const isTop = window.scrollY < 90;
            const bgSvg = document.getElementById('svg')
            if(isTop !== true){
                bgSvg.classList.add('scrolled');
            }
            else{
                bgSvg.classList.remove('scrolled');    
            }
        })
    }
    
    componentWillUnmount() {
        window.removeEventListener('scroll')
    }
    
    render() {
    	return (
            <div id="bgSvg" className="bgSvg">
                        <svg id="Lager_1" data-name="Lager 1" viewBox="0 0 1048.74 443.93">
        <defs>
        
        </defs>
        <title>Namnlöst-2</title>
        <line className="cls-1" x1="1048.37" y1="0.93" x2="0.37" y2="418.93" />
        <circle className="cls-2" cx="431.37" cy="247.93" r="195" />
        <path className="cls-3"
            d="M389.05,227.56v-1.32c3.85-.37,4-.65,3.95-5.68l.05-19.18c-3.86,8.6-10.06,22-11.71,26.18h-1.22c-1.6-4.28-6.91-17.2-10.48-25.71-.8,16.45-.85,20.16-.85,21.06,0,2.63,1.23,3,4.42,3.33v1.32H362.07v-1.32c2.73-.28,3.86-.84,4.23-3.38.29-2.07.33-3.76,1.55-20.91.19-2.45-.28-3.25-4.41-3.62V197h8.17L382,220.84,393.14,197h8.22v1.32c-4,.47-4.55.89-4.46,4.18l.19,18.05c.18,5,.33,5.26,4.46,5.68v1.32Z"
            transform="translate(1.37 0.93)" />
        <path className="cls-3"
            d="M419,228.12a3.44,3.44,0,0,1-2.21-.89,4.47,4.47,0,0,1-1.13-2.11c-1.88,1.27-4.18,3-5.64,3a5.76,5.76,0,0,1-5.73-5.78c0-2.3,1.27-3.8,3.85-4.7,2.87-1,6.4-2.2,7.43-3v-.94c0-3.34-1.69-5.26-4.14-5.26a2.71,2.71,0,0,0-2.21,1.08,10.11,10.11,0,0,0-1.26,3.05,1.32,1.32,0,0,1-1.37,1.08,2.26,2.26,0,0,1-2.07-2.07c0-.65.62-1.22,1.56-1.88a19.89,19.89,0,0,1,6.76-3.29,6.18,6.18,0,0,1,6.35,6.73v9.07c0,2.16.8,2.82,1.64,2.82a3.71,3.71,0,0,0,1.69-.52l.47,1.31Zm-3.43-11.89c-1,.52-3.29,1.51-4.37,2-1.79.8-2.87,1.69-2.87,3.43a3.42,3.42,0,0,0,3.39,3.62,6.23,6.23,0,0,0,3.85-1.69Z"
            transform="translate(1.37 0.93)" />
        <path className="cls-3"
            d="M435.77,227.56H425v-1.32c3-.28,3.24-.51,3.24-3.57V212.9c0-3.1-.19-3.25-2.91-3.57v-1.18a26.13,26.13,0,0,0,6.63-1.93v5.17c1.64-2.44,3.61-5,6-5a2.44,2.44,0,0,1,2.73,2.26,3.15,3.15,0,0,1-1.6,2.59.93.93,0,0,1-1.22-.1,3,3,0,0,0-2.11-1.17c-1,0-2.73,1.45-3.76,3.85v8.84c0,3.1.23,3.33,3.85,3.61Z"
            transform="translate(1.37 0.93)" />
        <path className="cls-3"
            d="M452.59,227.51a4.6,4.6,0,0,1-2,.61c-3,0-4.6-1.83-4.6-5.59V208.86h-3.24l-.19-.57,1.27-1.36H446v-4c.89-.94,2.25-2.16,3.15-3.1l.7.09c-.09,2-.14,4.7-.14,7H455a1.48,1.48,0,0,1-.28,1.93h-5.08v12c0,3.8,1.5,4.51,2.73,4.51a6.67,6.67,0,0,0,2.86-.75l.43,1.22Z"
            transform="translate(1.37 0.93)" />
        <path className="cls-3"
            d="M457.62,227.56v-1.32c3-.28,3.29-.51,3.29-3.71v-9.68c0-2.91-.14-3.1-3-3.57v-1.13a30.33,30.33,0,0,0,6.68-1.88v16.26c0,3.2.33,3.43,3.38,3.71v1.32Zm4.89-25.89a2.58,2.58,0,0,1-2.49-2.5,2.54,2.54,0,0,1,2.54-2.58,2.46,2.46,0,0,1,2.4,2.58A2.51,2.51,0,0,1,462.51,201.67Z"
            transform="translate(1.37 0.93)" />
        <path className="cls-3"
            d="M483.9,227.56v-1.32c2.72-.28,3-.61,3-3.8v-7.76c0-3.29-1.17-5.5-4.27-5.5a8.21,8.21,0,0,0-5.22,2.45v11c0,3.24.28,3.33,3,3.61v1.32H470.31v-1.32c3.11-.32,3.39-.51,3.39-3.61v-9.69c0-3.05-.33-3.19-2.87-3.61V208.1a26.11,26.11,0,0,0,6.58-1.88v3.72c.94-.66,2-1.37,3.2-2.17a7.21,7.21,0,0,1,3.9-1.41c3.76,0,6.11,2.78,6.11,7.34v8.93c0,3.19.28,3.33,3,3.61v1.32Z"
            transform="translate(1.37 0.93)" />
        <path className="cls-3"
            d="M430.27,276.16c-.29,1.46-1.69,6.34-2.17,7.8H406.25v-1.32c4.28-.42,4.65-.65,4.65-4.65V259.33c0-4-.47-4.23-4.23-4.6v-1.32h12.6v1.32c-3.76.37-4.28.56-4.28,4.6v19.13c0,2.87.38,3.53,3.06,3.57l3.71.05c2.4,0,3.1-.28,4.18-1.46a15.88,15.88,0,0,0,2.87-4.84Z"
            transform="translate(1.37 0.93)" />
        <path className="cls-3"
            d="M432.76,284v-1.32c3-.28,3.29-.51,3.29-3.71v-9.68c0-2.91-.14-3.1-3-3.57v-1.13a30.4,30.4,0,0,0,6.67-1.88v16.26c0,3.2.33,3.43,3.39,3.71V284Zm4.89-25.9a2.56,2.56,0,0,1-2.49-2.49,2.53,2.53,0,0,1,2.53-2.58,2.45,2.45,0,0,1,2.4,2.58A2.49,2.49,0,0,1,437.65,258.06Z"
            transform="translate(1.37 0.93)" />
        <path className="cls-3"
            d="M459,284v-1.32c2.73-.28,3-.61,3-3.8v-7.76c0-3.29-1.18-5.5-4.28-5.5a8.18,8.18,0,0,0-5.21,2.45v11c0,3.24.28,3.33,3.05,3.61V284H445.45v-1.32c3.1-.32,3.38-.51,3.38-3.61v-9.69c0-3-.33-3.19-2.86-3.61V264.5a26.23,26.23,0,0,0,6.58-1.88v3.72c.94-.66,2-1.37,3.19-2.17a7.27,7.27,0,0,1,3.9-1.41c3.76,0,6.11,2.78,6.11,7.34V279c0,3.19.28,3.33,3,3.61V284Z"
            transform="translate(1.37 0.93)" />
        <path className="cls-3"
            d="M494.23,282.79a49.37,49.37,0,0,0-7.28,1.73v-3c-.85.52-2.07,1.17-2.91,1.69a8.54,8.54,0,0,1-3.72,1.36c-3.76,0-8.74-3.76-8.74-10.33s5.73-11.43,12.17-11.43a9.68,9.68,0,0,1,3.2.52v-6.91c0-3-.33-3.1-3.67-3.38v-1.22a47.12,47.12,0,0,0,7.38-1.6v28.34c0,2.44.33,2.77,2.07,2.87l1.5.09ZM487,267A5.89,5.89,0,0,0,482,264.6c-2.25,0-6.25,1.5-6.25,8.27,0,5.69,3.53,8.69,6.54,8.74a8.49,8.49,0,0,0,4.65-1.69Z"
            transform="translate(1.37 0.93)" />
        <path className="cls-3"
            d="M506.27,263.23a5.69,5.69,0,0,1,2.06-.47c5,0,9.26,4.38,9.26,10,0,6.34-5.45,11.84-11.61,11.79a17.41,17.41,0,0,1-7.23-1.69V256.42c0-2.91-.14-3.2-3.15-3.43v-1.22a38.65,38.65,0,0,0,6.86-1.6v14.71Zm-3.81,15.28a4.2,4.2,0,0,0,.23,1.64,5.36,5.36,0,0,0,4.66,2.54c4,0,6.06-3.48,6.06-8.79s-3.24-8.5-7.14-8.5a9.07,9.07,0,0,0-3.81.89Z"
            transform="translate(1.37 0.93)" />
        <path className="cls-3"
            d="M520.22,284v-1.32c3-.28,3.39-.51,3.39-3.61V256.51c0-2.86-.24-3.14-3.24-3.52v-1.22a33.41,33.41,0,0,0,7-1.6V279c0,3.1.28,3.33,3.34,3.61V284Z"
            transform="translate(1.37 0.93)" />
        <path className="cls-3"
            d="M548,284.52a3.44,3.44,0,0,1-2.21-.89,4.47,4.47,0,0,1-1.13-2.11c-1.88,1.27-4.18,3-5.64,3a5.76,5.76,0,0,1-5.73-5.78c0-2.3,1.27-3.8,3.86-4.7,2.86-1,6.39-2.21,7.42-3.05v-.94c0-3.34-1.69-5.26-4.14-5.26a2.69,2.69,0,0,0-2.2,1.08,9.84,9.84,0,0,0-1.27,3.05,1.32,1.32,0,0,1-1.37,1.08,2.26,2.26,0,0,1-2.06-2.07c0-.65.61-1.22,1.55-1.88a20,20,0,0,1,6.76-3.29,6.18,6.18,0,0,1,6.35,6.73v9.07c0,2.16.8,2.82,1.64,2.82a3.78,3.78,0,0,0,1.7-.52l.47,1.31Zm-3.43-11.89c-1,.52-3.29,1.51-4.37,2-1.79.8-2.87,1.69-2.87,3.43a3.42,3.42,0,0,0,3.39,3.62,6.23,6.23,0,0,0,3.85-1.69Z"
            transform="translate(1.37 0.93)" />
        <path className="cls-3"
            d="M576.62,282.79a49.37,49.37,0,0,0-7.28,1.73v-3c-.85.52-2.07,1.17-2.91,1.69a8.54,8.54,0,0,1-3.72,1.36c-3.76,0-8.74-3.76-8.74-10.33s5.74-11.43,12.17-11.43a9.68,9.68,0,0,1,3.2.52v-6.91c0-3-.33-3.1-3.67-3.38v-1.22a47.12,47.12,0,0,0,7.38-1.6v28.34c0,2.44.33,2.77,2.07,2.87l1.5.09ZM569.34,267a5.89,5.89,0,0,0-4.94-2.39c-2.25,0-6.25,1.5-6.25,8.27,0,5.69,3.53,8.69,6.54,8.74a8.49,8.49,0,0,0,4.65-1.69Z"
            transform="translate(1.37 0.93)" />
        <line className="cls-1" x1="273.37" y1="277.93" x2="393.37" y2="277.93" />
        <line className="cls-1" x1="272.37" y1="301.93" x2="449.37" y2="301.93" />
        <line className="cls-1" x1="272.37" y1="324.93" x2="503.37" y2="324.93" />
        <path className="cls-4" d="M568,213c-14.64-63.83-71.37-109.46-136-110-66.58-.55-125.32,46.9-139,113"
            transform="translate(1.37 0.93)" />
    </svg>
                
                </div>
        );  
    }
}







export default () =>{
    return(
    <ScrollToggle />
    )
 }