document.querySelectorAll('.carousel').forEach(c=>{
  const t=c.querySelector('.track'),s=[...t.children],d=c.querySelector('.dots');
  const beh=matchMedia('(prefers-reduced-motion: reduce)').matches?'auto':'smooth';
  s.forEach((el,i)=>{
    const b=document.createElement('button');
    b.className='dot';b.setAttribute('aria-label','Foto '+(i+1));
    b.onclick=()=>t.scrollTo({left:el.offsetLeft-(t.clientWidth-el.offsetWidth)/2,behavior:beh});
    d.append(b);
  });
  const dots=[...d.children];
  const update=()=>{
    let m=0,best=Infinity;
    s.forEach((el,i)=>{
      const x=Math.abs(el.offsetLeft+el.offsetWidth/2-t.scrollLeft-t.clientWidth/2);
      if(x<best){best=x;m=i}
    });
    dots.forEach((x,i)=>x.classList.toggle('on',i===m));
  };
  t.addEventListener('scroll',update,{passive:true});update();
  c.querySelector('.prev').onclick=()=>t.scrollBy({left:-t.clientWidth*.7,behavior:beh});
  c.querySelector('.next').onclick=()=>t.scrollBy({left:t.clientWidth*.7,behavior:beh});
});
