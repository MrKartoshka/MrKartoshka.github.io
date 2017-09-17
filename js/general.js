$(document).ready(function() {
    function PersonalSkill(title, rate) {
        this.title = title;
        this.rate = rate;
    }
    var html = new PersonalSkill ('HTML5', 5);
    var css = new PersonalSkill ('CSS/SASS', 5);
    var js = new PersonalSkill ('JavaScript', 4);
    var angular = new PersonalSkill ('AngularJS', 4);
    var ionic = new PersonalSkill ('Ionic', 4);
    var gulp = new PersonalSkill ('Gulp/Webpack', 4);

    var skillList = [html, css, js, angular, ionic, gulp];

    var addSkills = function () {
        for (var i = 0; i < skillList.length; i++) {
            var text = '<div class="skill-item">' + '<div class="skill-name">' + skillList[i].title + '</div>' + '<div class="skill-desc">';
            for (var x = 0; x < skillList[i].rate; x++) {
                text += '<div class="star"></div>';
            }
            text += '</div>' + '</div>';
            $('.skill_etc').before(text);
            text = '';
        }
    };

    addSkills();
});

var showProfSkills = function () {
    $('.pers-skills').hide(1000);
    $('.work-exp').hide(1000);
    $('.prof-skills').show(1000).css('display', 'flex');
    $('.contacts-menu a').eq(1).removeClass( "bounce" );
    $('.contacts-menu a').eq(2).removeClass( "bounce" );
    $('.contacts-menu a').eq(0).addClass( "bounce" );
};
var showPersSkills = function () {
    $('.work-exp').hide(1000);
    $('.prof-skills').hide(1000);
    $('.pers-skills').show(1000).css('display', 'flex');
    $('.contacts-menu a').eq(0).removeClass( "bounce" );
    $('.contacts-menu a').eq(2).removeClass( "bounce" );
    $('.contacts-menu a').eq(1).addClass( "bounce" );

};
var showWorkExp = function () {
    $('.pers-skills').hide(1000);
    $('.prof-skills').hide(1000);
    $('.work-exp').show(1000).css('display', 'flex');
    $('.contacts-menu a').eq(0).removeClass( "bounce" );
    $('.contacts-menu a').eq(1).removeClass( "bounce" );
    $('.contacts-menu a').eq(2).addClass( "bounce" );
};

var showInfo  = function () {
    $('.s-welcome').hide();
    $('.s-contacts').hide();
    $('.s-info').show().css('display', 'flex');


};

var showContacts = function () {
    $('.s-welcome').hide();
    $('.s-info').hide();
    $('.s-contacts').show().css('display', 'flex');
    showProfSkills();
};



