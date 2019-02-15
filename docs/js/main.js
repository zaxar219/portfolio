$(document).ready(function() {
	
	paticlesbg
	
	

		/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
	particlesJS.load('paticlesbg', 'js/particles.json', function() {
	  console.log('callback - particles.js config loaded');
	});

	//scroll
	$("body").niceScroll({
		cursorcolor: "#39b4f5",
		cursorwidth: "10px",
//		opacitymin: "0.4",
		cursoropacitymin: "0.4",
		disableoutline: true
	});


	
	//Плавная прокрутка
	$("nav a,a[href='#top'],a[rel='m_PageScroll2id'],a.PageScroll2id").mPageScroll2id({
	    highlightSelector:"nav a"
	});

	// MixItUp - Фильтрация работ в портфолио
	$('#portfolio-projects').mixItUp();
	
	
	
	//Рамка фильтра работ
	
	var filter_btn = $ ('.filter-block__button ');
  var class_active = 'filter-block__button--active';

  // Фильтр работ
  filter_btn.on('click', function (e) {
      e.preventDefault ();
      $(filter_btn).removeClass(class_active);
      $(this).addClass(class_active);
  });
	
	

	// FancyBox - galery
	$(".fancybox").fancybox({
			// Default - with fix from scroll to top
            helpers: {
                overlay: {
                    locked: false
                }
            }
    });

	// jQuery Validate JS
	$("#contact-form").validate({
		rules: {
			name: { required: true },
			email: { required: true, email:true },
//			skype: { required: true },
//			phone: { required: true },
			massage: { required: true }
		},
		messages: {
			name: "Пожалуйста, введите свое имя",
			email: {
				required: "Пожалуйста, введите свой email",
				email: "Email адрес должен быть в формате name@domain.com . Возможно вы ввелиemail с ошибкой."
			},
			massage: "Пожалуйста, введите текст сообщения",
			
		},
		
		submitHandler: function(form) {
		  ajaxFormSubmit();
		}
		
	})
	
	
	// Функция AJAX запрса на сервер
	function ajaxFormSubmit(){
		var string = $("#contact-form").serialize(); // Соханяем данные введенные в форму в строку. 

		// Формируем ajax запрос
		$.ajax({
			type: "POST", // Тип запроса - POST
			url: "php/mail.php", // Куда отправляем запрос
			data: string, // Какие даные отправляем, в данном случае отправляем переменную string
			
			// Функция если все прошло успешно
			success: function(html){
				$("#contact-form").slideUp(800);
				$('#answer').html(html);
			}
		});

		// Чтобы по Submit больше ничего не выполнялось - делаем возврат false чтобы прервать цепчку срабатывания остальных функций
		return false; 
	}
	
	
	// Поворот карты по ховеру
	 $('.portfolio-item__card').hover( function() {
		$(this).find('.portfolio-item__card-block').addClass('flip')
	 },
	 function() {
		$(this).find('.portfolio-item__card-block').removeClass('flip')
	 })

	$(function() {

		$('.draggable').draggable();

	});

	
	
	
	
	
	
	
	
	


	
}); 