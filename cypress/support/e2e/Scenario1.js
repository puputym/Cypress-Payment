describe('Payment Successfully with login', () => {
   

    it('User Checkout Payment', () => {
        cy.viewport(1280, 720)
        //user access web rakamin
        cy.visit('https://web-staging.rakamin.com/virtual-internship-experience/explore')
        cy.contains('Login').click();

       
        cy.get('input[name="email"]').type('taron30taron@dexamail.com')
        cy.get('input[name="password"]').type('12345678')
        cy.get('button[type="submit"]').click()
      
          
         //select any program VIX
         cy.contains('Pilih Program').click();
         cy.get('p:contains("Data Science")').click();

        // User navigates to VIX detail page
        // User clicks "Daftar Sekarang" button
         cy.get('button[data-cy="register-vix-button"]').click()

         // User fills in application form
         cy.get('input[name="name"]').type('Puput')
         cy.get('input[name="phone_number"]').type('1234567890')
         cy.get('img[data-cy="vix-info-source-option-1"]').click();
         //check T&C
         cy.get('img[data-cy="agreement-checkbox"]').click();
         cy.contains('Submit').click();
         cy.get('button[type="submit"]').click()
         //Pilih VIP Access
         cy.contains('Checkout').click();
         cy.get('img[data-cy="vip-access-checkbox"]').click();
         cy.contains('Lanjutkan ke Pembayaran').click();

    
      
        // cy.get('select[name="access"]').select('VIP Access')
         //button[@class='sc-bgqQcB ecsLvJ sc-iyPfQw ipUdzA']
  })



})