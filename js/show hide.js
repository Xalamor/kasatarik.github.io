function onEntry(entry) {
    entry.forEach(change => {
      if (change.isIntersecting) {
       change.target.classList.add('element-show');
      }
    });
  }
  
  let options = {
    threshold: [0.5] };
  let observer = new IntersectionObserver(onEntry, options);
  let elements = document.querySelectorAll('.text_box_2p1');
  
  for (let elm of elements) {
    observer.observe(elm);
  }

  elements2 = document.querySelectorAll('.paint');
  for (let elm of elements2) {
    observer.observe(elm);
  }

  elements3 = document.querySelectorAll('.text_box_2p2');
  for (let elm of elements3) {
    observer.observe(elm);
  }

  elements4 = document.querySelectorAll('.text_box_2p3');
  for (let elm of elements4) {
    observer.observe(elm);
  }

  elements5 = document.querySelectorAll('.text_box_white_1');
  for (let elm of elements5) {
    observer.observe(elm);
  }

  elements6 = document.querySelectorAll('.text_box_white_2');
  for (let elm of elements6) {
    observer.observe(elm);
  }

  elements7 = document.querySelectorAll('.text_box_white_3');
  for (let elm of elements7) {
    observer.observe(elm);
  }


  elements8 = document.querySelectorAll('.japan');
  for (let elm of elements8) {
    observer.observe(elm);
  }

  elements9 = document.querySelectorAll('.splash_1');
  for (let elm of elements9) {
    observer.observe(elm);
  }

  elements10 = document.querySelectorAll('.splash_2');
  for (let elm of elements10) {
    observer.observe(elm);
  }

  elements11 = document.querySelectorAll('.text_box_p4_1');
  for (let elm of elements11) {
    observer.observe(elm);
  }

  elements12 = document.querySelectorAll('.text_box_p4_2');
  for (let elm of elements12) {
    observer.observe(elm);
  }

  elements14 = document.querySelectorAll('.text_box_p4_3');
  for (let elm of elements14) {
    observer.observe(elm);
  }
  elements15 = document.querySelectorAll('.text_box_p4_2_1');
  for (let elm of elements15) {
    observer.observe(elm);
  }

  elements16 = document.querySelectorAll('.text_box_p4_2_2');
  for (let elm of elements16) {
    observer.observe(elm);
  }

  elements17 = document.querySelectorAll('.text_box_p4_2_3');
  for (let elm of elements17) {
    observer.observe(elm);
  }

  elements18 = document.querySelectorAll('.tex_box_w');
  for (let elm of elements18) {
    observer.observe(elm);
  }

  elements19 = document.querySelectorAll('.tex_box_w_2');
  for (let elm of elements19) {
    observer.observe(elm);
  }

  elements20 = document.querySelectorAll('.black_text_box');
  for (let elm of elements20) {
    observer.observe(elm);
  }

  elements21 = document.querySelectorAll('.black_text_box_2');
  for (let elm of elements21) {
    observer.observe(elm);
  }

  elements22 = document.querySelectorAll('.check_icon');
  for (let elm of elements22) {
    observer.observe(elm);
  }
  
  
  



  