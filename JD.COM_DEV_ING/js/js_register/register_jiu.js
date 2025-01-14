window.onload = function() {
    // 手机号验证
    // 1.要获取元素
    var phone = document.querySelector('#phone');
    var ts1 = document.querySelector('#ts1');
    var wzts1 = document.querySelector('#wzts1');
    // 设置手机号验证规则（正则表达式）/^   $/
    var reg1 = /^[1][3-9][0-9]{9}$/;
    // 手机号文本框获得焦点或者失去焦点时的提示事件
    phone.addEventListener('focus', function() {
        if (this.value == '') {
            ts1.style.display = 'block';
            wzts1.innerText = '请输入手机号';
        } else {
            ts1.style.display = 'none';
        }
    })
    phone.addEventListener('blur', function() {
            // ts1.style.display = 'none';
            if (this.value == '') {
                wzts1.innerText = '手机号不能为空';
            } else {
                if (reg1.test(this.value) === true) {
                    ts1.style.display = 'none';
                } else {
                    ts1.style.display = 'block';
                    wzts1.innerText = '手机号输入格式有误!';
                }
            }

        })
        // 2.email获取元素
    var emails = document.querySelector('#Emails');
    var ts2 = document.querySelector('#ts2');
    var wzts2 = document.querySelector('#wzts2');
    // 设置email验证规则（正则表达式）
    var reg2 = /^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/
        // email 文本框获得焦点或者失去焦点时的提示事件
    emails.addEventListener('focus', function() {
        if (this.value == '') {

            ts2.style.display = 'block';
            wzts2.innerText = '请输入邮箱号';
        } else {
            ts2.style.display = 'none';
        }
    })
    emails.addEventListener('blur', function() {
            // ts2.style.display = 'none'；
            if (this.value == '') {
                wzts2.innerText = '邮箱号不能为空';
            } else {
                if (reg2.test(this.value) === true) {
                    ts2.style.display = 'none';
                } else {
                    ts2.style.display = 'block';
                    wzts2.innerText = '邮箱号输入格式有误!';
                }
            }
        })
        // 3.密码获取元素
    var password = document.querySelector('#password');
    var ts3 = document.querySelector('#ts3');
    var wzts3 = document.querySelector('#wzts3');
    var grade1 = document.querySelector('#grade1');
    var grade2 = document.querySelector('#grade2');
    var grade3 = document.querySelector('#grade3');
    // 声明变量密码强度级别n
    var n = 0;
    var passwordlevel = 0;
    // 设置密码验证规则（正则表达式）
    // 全数字（8-20)
    var reg3 = /^\d{8,20}$/;
    // 全字母（8-20）
    var reg4 = /^[A-Za-z]{8,20}$/;
    // 全符号
    var reg5 = /^[~!@#$%&*<>-_\/()=:;"?+{}]{8,20}$/;
    // 数字+字母
    var reg6 = /^(?=.*\d)(?=.*[A-z]).{8,20}$/;
    //  字母+符号
    // var reg7=/^[A-Za-z~!@#$%&*<>-_\/()=:;"?+{}]{8,z0}$/
    var reg7 = /^(?=.*[A-z])(?=.*\d).{8,20}$/;
    // 数字+符号
    // var reg8=/^[\d~!@#$%&*<>-_\/()=:;"?+{}]{8,20}$/
    var reg8 = /(?=.*\d)(?=.*[~!@#$%&*()<>-_/\-=:;"?+{}]).{8,20}$/;
    // 数字+字母+符号
    // var reg9=/^[\dA-aa-z~!@#$%&*<>-_\/()=:;"?+{}]{8,20}$/
    var reg9 = /^(?=.*\d)(?=.*[A-z])(?=.*[~!@#$%&*()<>-_/\-=:;"?+{}]).{8,20}$/;
    //定义一个可以得到密码的强度级别
    function teststrong(password) {
        if (reg9.test(password.value) == true) {
            n = 3;
        } else {
            if (reg6.test(password.value) == true || reg7.test(password.value) == true || reg8.test(password.value) == true) {
                n = 2;
            } else {
                if (reg4.test(password.value) == true || reg5.test(password.value) == true) {
                    n = 1;
                } else {
                    if (reg3.test(password.value) == true) {
                        n = 0;
                    } else {
                        n = -1;
                    }
                }
            }
        }
        return n;
    }
    // 密码文本框获得焦点或失去焦点时的提示事件
    password.addEventListener('focus', function() {
        if (this.value == '') {
            // alert('efrsre');
            ts3.style.display = 'block';
            wzts3.innerText = '请输入8-20位密码';
        } else {
            ts3.style.display = 'none';
        }
    })
    password.addEventListener('blur', function() {
            if (this.value == '') {
                ts3.style.display = 'block';
                wzts3.innerText = '密码不能为空';
            } else {
                // if (reg10.test(this.value) === true) {
                // ts3.style.display = 'none';
                // } else {
                // ts3.style.display = 'block';
                // wzts3.innerText = '密码错误';
                // }
                passwordlevel = teststrong(password);
                switch (passwordlevel) {
                    case 0:
                        ts3.style.display = 'block';
                        wzts3.innerText = '密码过于简单';
                        grade1.style.backgroundColor = 'red';
                        grade2.style.backgroundColor = '#e1aeab';
                        grade3.style.backgroundColor = '#e1aeab';
                        break;
                    case 1:
                        ts3.style.display = 'none';
                        grade1.style.backgroundColor = 'red';
                        grade2.style.backgroundColor = '#e1aeab';
                        grade3.style.backgroundColor = '#e1aeab';
                        break;
                    case 2:
                        ts3.style.display = 'none';
                        grade1.style.backgroundColor = 'red';
                        grade2.style.backgroundColor = 'red';
                        grade3.style.backgroundColor = '#e1aeab';
                        break;
                    case 3:
                        ts3.style.display = 'none';
                        grade1.style.backgroundColor = 'red';
                        grade2.style.backgroundColor = 'red';
                        grade3.style.backgroundColor = 'red';
                        break;
                    default:
                        ts3.style.display = 'block';
                        wzts3.innerText = '密码不符合要求';
                        grade1.style.backgroundColor = '#e1aeab';
                        grade2.style.backgroundColor = '#e1aeab';
                        grade3.style.backgroundColor = '#e1aeab';
                        break;
                }
            }
        })
        // 4.请再次输入密码
        // 3.密码获取元素
    var password1 = document.querySelector('#password1');
    var ts4 = document.querySelector('#ts4');
    var wzts4 = document.querySelector('#wzts4');
    password1.addEventListener('blur', function() {
            if (this.value == '') {
                ts4.style.display = 'block';
                wzts4.innerText = '请确认密码！';
            } else {
                if (this.value == password.value) {
                    ts4.style.display = 'none';
                } else {
                    ts4.style.display = 'block';
                    wzts4.innerText = '密码不一致!';
                }
            }
        })
        // 验证按钮
        // 1.获取元素
    var btn = document.querySelector('#btn');
    var check = document.querySelector('#check')
        // 2.单击按钮时的提示事件
    btn.addEventListener('click', function() {
        if (phone.value == '' || Emails.value == '' || password1.value == '' || password == '') {
            alert('信息不为空');
        } else {
            if (gz1.test(phone.value) == true && reg2.test(Emails.value) == true && n != -1 && password.value == password1.value) {
                alert('注册成功');

            } else {
                alert('信息填写不正确，请重新填写');
            }
        }

    })
}