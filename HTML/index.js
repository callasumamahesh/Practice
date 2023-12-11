 // first assignment

// const head = document.createElement('h1');

// head.textContent = 'First Heading'

// document.body.appendChild(head)


// const heading = document.createElement('h1')

// heading.textContent = 'From Append'

// document.body.append(heading)


// const heading2 = document.createElement('p')

// heading2.innerHTML = 'This is from innerHTmL'

// document.body.append(heading2)


// // assignment-2

// const image = document.createElement('img')

// image.src='https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?cs=srgb&dl=pexels-pixabay-268533.jpg&fm=jpg';

// image.width = 300;

// image.height = 200;

// image.alt = 'photo';

// document.body.append(image)


// //assignment-3


// const user_login = document.createElement('section');

// user_login.className = 'login';

// const user_input = document.createElement('input');

// user_input.type = 'text';

// user_input.className = 'emailinput';

// const user_password = document.createElement('input');

// user_password.type = 'password';

// user_password.className = 'passwordinput';

// const submit_button = document.createElement('button');

// submit_button.className = 'loginButton';

// submit_button.textContent = 'Login'

// user_login.append(user_input , user_password, submit_button)

// document.body.append(user_login)


// //Assignment-5

// const image = document.querySelector('.image');
// function deleted(){
//     image.style.display = 'none';
// }

// const image_button = document.getElementById('button')


// image_button.addEventListener('click',()=>{
//     image.style.display= 'none';
// })
// image_button.addEventListener('click',()=>{
//     alert('Image deleted')
// })


// // assignment-6

// function hide(){
//     console.log(document.getElementById('div_image').style.display)
//     if (document.getElementById('div_image').style.display === ' ' | document.getElementById('div_image').style.display === 'none') {
//         document.getElementById('div_image').style.display = 'block';
//         document.getElementById('button').style.backgroundColor = '';
//         document.getElementById('button').innerText = 'Hide Element';
//     }
//     else{
//             document.getElementById('div_image').style.display = 'none';
//             document.getElementById('button').style.backgroundColor = 'red';
//             document.getElementById('button').innerText = 'Show Element';
//     }
// }



//assignment-7

// const count = document.querySelector('#p');

// function increment(){
//     let number = parseInt(count.innerHTML)

//     let new_number = number+1;

//     count.innerHTML = new_number;
// }


//assignment-8

// const zero = document.getElementById('p');

// console.log(zero)

// const increase = document.getElementById('increment');

// const decrease = document.getElementById('decrement');

// increase.addEventListener('click',() => {
//     const int_Zero = parseInt(zero.innerHTML);

//     const inc = int_Zero + 1;

//     zero.innerHTML = inc;

// })

// decrease.addEventListener('click',() => {
//     let inc = 0;
//     const int_Zero = parseInt(zero.innerHTML);

//     if (int_Zero <= 0){
//         inc = 0;
//     }
//     else{
//          inc = int_Zero - 1;
//     }

//     zero.innerHTML = inc;

// })

let a =1,b=2,c=3,d=4,e=5,f=6;

console.log(a+b+c+d+e+f)

console.error('This is a error')

console.warn('This is a warning')

console.info('This is info')


