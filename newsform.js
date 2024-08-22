<script src="https://cdn.emailjs.com/dist/email.min.js"></script>
    <script type="text/javascript">
        (function() {
            emailjs.init("city52news");
        })();

        document.getElementById('emailForm').addEventListener('submit', function(event) {
            event.preventDefault();

            var formData = new FormData(this);
            formData.append('service_id', 'service_907hmeh');
            formData.append('template_id', 'template_b4z0pvl');
            formData.append('user_id', 'city52news');

            emailjs.sendForm('service_907hmeh', 'template_b4z0pvl', this)
                .then(function(response) {
                    alert('خبر کامیابی سے بھیجی گئی!');
                }, function(error) {
                    alert(' خبر بھیجنے میں مسئلہ ہوا۔');
                });
        });
    </script>
