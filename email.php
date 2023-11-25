<?php
require_once("header.php")
?>

<section style="background: #f4f3f3;    padding: 100px;">
  <div class="container">
    <div class="row">
      <div class="col-md-10">
        <h1 class="email_heading">EMAIL US</h1>

        <div class="card main_card">
          <div class="card-body">
            <p class="email_paragraph">Please provide the following information and the Client Services will answer your inquiry as soon as possible. You can also visit the FAQ section where you can find the list of the most frequently asked questions.</p>
          </div>
        </div>

        <div class="card card_email">
          <div class="card-body">
            <form>
              <label class="email_label">Titel *</label>
              <select class="form-control email_form">
                <option>Mr</option>
                <option>Mrs</option>
                <option>Ms</option>
                <option>Mx</option>
                <option>Perfer not to say</option>
              </select>

              <label class="email_label mt-3">First Name *</label>
              <input type="text" class="form-control email_form" >

              <label class="email_label mt-3">Last Name *</label>
              <input type="text" class="form-control email_form" >

              <label class="email_label mt-3">Email Address *</label>
              <input type="text" class="form-control email_form" >

              <label class="email_label mt-3">Country *</label>
              <select class="form-control email_form">
                <option value="Afghanistan">Afghanistan</option>
                <option value="Åland Islands">Åland Islands</option>
                <option value="Albania">Albania</option>
                <option value="Algeria">Algeria</option>
                <option value="American Samoa">American Samoa</option>
                <option value="Andorra">Andorra</option>
                <option value="Angola">Angola</option>
                <option value="Anguilla">Anguilla</option>
                <option value="Antarctica">Antarctica</option>
                <option value="Antigua and Barbuda">Antigua and Barbuda</option>
                <option value="Argentina">Argentina</option>
                <option value="Armenia">Armenia</option>
                <option value="Aruba">Aruba</option>
                <option value="Australia">Australia</option>
                <option value="Austria">Austria</option>
                <option value="Azerbaijan">Azerbaijan</option>
                <option value="Bahamas">Bahamas</option>
                <option value="Bahrain">Bahrain</option>
                <option value="Bangladesh">Bangladesh</option>
                <option value="Barbados">Barbados</option>
              </select>

              <label class="email_label mt-3">Phone *</label>
              <input type="text" class="form-control email_form" >

              <label class="email_label mt-3">Subject of Your Message *</label>
              <select class="form-control email_form">
                <option>Product Inoformation</option>
                <option>Product Care & Repairs</option>
                <option>Stores Inoformation</option>
                <option>Yoyol Kusama & Louis Vuitton Product Information</option>
                <option>Careers</option>
                <option>Privacy Rights Request</option>
              </select>

              <label class="email_label mt-3">Insert your order number</label>
              <input type="text" class="form-control email_form" >

              <label class="email_label mt-3">Message</label>
              <textarea class="form-control" style="height: 200px !important;"></textarea>

              <p class="email_paragraph mt-3">(1000 characters max)</p>

              <a class="btn btn-secondary">Send Your Massage</a>
            </form>
          </div>
        </div>

        <p class="email_paragraph mt-5">If you do provide us with personally identifiable information, we may use it to improve our understanding of your interests and concerns. We will also use this information to process your order.If you tell us you would like to receive additional information from us by email, we may use your information to occasionally contact you about changes to our website, new products, site and service updates, and special offers we think you'll find valuable. If you would rather not receive these emails, simply follow the unsubscribe instructions on the email that you have received.If you register for one of our sweepstakes, contests, or promotions, we may share personal information with service providers, suppliers and other third parties (for example, sweepstakes sponsors or delivery services) that assist us in operating the Site or executing the promotion.We may transfer your personally identifiable information to our associated companies or other companies with whom we contract outside the United States, including the European Economic Area. These companies may be located in countries with less stringent laws for protection of personal information than the laws of the United States. We will, however, use commercially reasonable security practices to ensure that your personal information is kept confidential and secure, and that the appropriate technical and organizational measures to prevent unlawful or accidental destruction, accidental loss, unauthorized disclosure or access or other unlawful forms of processing are implemented.We may share your information with our legally affiliated entities. If we are merged, or in the event of a transfer of our assets, Site or operations, we may disclose or transfer your personal information in connection with such transaction.</p>
      </div>
    </div>
  </div>
</section>
<script>
    $(document).ready(function(){
        $.noConflict();
    });
</script>

<?php
require_once("footer.php")
?>