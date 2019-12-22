const validate = values => { 
    const {title}= values;
    const errors = {}
    if(!title){
        errors.title = 'Vui lòng nhập tiêu đề';
    }else if (title.trim() && title.length < 5){
        errors.title = 'Tiêu đề phải từ 5 ký tự';
    }
    return errors;
}

export default validate;