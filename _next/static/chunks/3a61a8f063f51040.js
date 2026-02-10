(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,61701,e=>{"use strict";var n=e.i(43476);let o=[{name:"Python",image:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"},{name:"Swift",image:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swift/swift-original.svg"},{name:"Docker",image:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg"},{name:"AWS",image:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg"},{name:"MongoDB",image:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg"},{name:"FastAPI",image:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg"}];function s(){return(0,n.jsxs)("div",{className:"w-full bg-background py-12 overflow-hidden relative",children:[(0,n.jsx)("style",{children:`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .carousel-scroll {
          animation: scroll 40s linear infinite;
          will-change: transform;
          display: flex;
        }
        .carousel-fade::before {
          content: '';
          position: absolute;
          left: 0;
          top: 0;
          bottom: 0;
          width: 100px;
          background: linear-gradient(to right, hsl(var(--background)), transparent);
          z-index: 10;
          pointer-events: none;
        }
        .carousel-fade::after {
          content: '';
          position: absolute;
          right: 0;
          top: 0;
          bottom: 0;
          width: 100px;
          background: linear-gradient(to left, hsl(var(--background)), transparent);
          z-index: 10;
          pointer-events: none;
        }
      `}),(0,n.jsx)("div",{className:"carousel-fade",children:(0,n.jsx)("div",{className:"carousel-scroll flex gap-8",children:[void 0,void 0,void 0].flatMap((e,s)=>o.map(e=>(0,n.jsxs)("div",{className:"flex flex-col items-center justify-center p-6 bg-card rounded-xl border border-border shadow-md hover:shadow-lg transition-shadow w-40 h-40 flex-shrink-0",children:[(0,n.jsx)("img",{src:e.image,alt:e.name,className:"w-16 h-16 mb-3 object-contain",onError:e=>{e.currentTarget.style.display="none"}}),(0,n.jsx)("p",{className:"text-sm font-semibold text-foreground text-center",children:e.name})]},`${e.name}-${s}`)))})})]})}e.s(["SkillsCarousel",()=>s])}]);