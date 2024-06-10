onload = ()=>{
    let close = document.querySelector('.close'),
        nav = document.querySelector('.nav-links'),
        open = document.querySelector('.nav');
    
    this.cl = () => {
        nav.style.display = 'none';
    };
    
    this.op = () => {
        nav.style.display = 'flex';
    };
    
    }