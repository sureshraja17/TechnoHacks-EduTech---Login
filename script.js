function showForm(formId) {
    document.getElementById('signin-form').style.display = 'none';
    document.getElementById('signup-form').style.display = 'none';
    
    document.getElementById(formId + '-form').style.display = 'block';
}
