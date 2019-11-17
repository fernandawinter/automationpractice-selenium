// This is a test case example of go to eCommerce Site and click on a Product.


const SELECTORS = {
    HOME_PAGE_PRODUCT_LINK: '.product-container .product-name',
    ADD_TO_CART_BUTTON: '#add_to_cart [type="submit"]',
    PROCEED_T0_CHECKOUT_BUTTON: '.button-container a',
    VALIDATION_AND_PROCEED_T0_CHECKOUT_BUTTON:'.standard-checkout',
    RANDOM_EMAIL_FILL: '.form-group #email_create',
    CREATE_AN_ACCOUNT_BUTTON: '#SubmitCreate',
    MRS_BUTTON: '#id_gender2',
    FIRST_NAME_FILL: '#customer_firstname',
    LAST_NAME_FILL: '#customer_lastname',
    EMAIL_FILL: '.required #email',
    PASSWORD_FILL: '#passwd',
    ADDRESS_FILL: '#address1',
    CITY_FILL: '#city',
    STATE_FILL: '#id_state',
    POSTAL_CODE_FILL: '#postcode',
    COUTRY_FILL: '#id_country',
    MOBILE_PHONE_FILL: '#phone_mobile',
    ADDRESS_ALIAS_FILL: '#alias',
    REGISTER_BUTTON: '#submitAccount',
    ADDRESS_VALIDATION_AND_PROCEED_TO_CHECKOUT_BUTTON: '.cart_navigation .button span',
    TERMS_OF_SERVICE_CHECK: '#cgv',
    PROCEED_TO_THE_NEXT_STEP_BUTTON: '.cart_navigation .standard-checkout span',
    PAY_BY_BANK_WIRE_BUTTON: '.bankwire',
    CONFIRM_MY_ORDER_BUTTON: '.cart_navigation .button span',
    SUCESSFUL_ORDER: '.box .dark'
};

const USER_DATA = {
    EMAIL_ADDRESS: generateRandomNumber() + '@teste.com',
    FIRST_NAME: 'Fernanda',
    LAST_NAME: 'Winter',
    PASSWORD: '12345',
    ADDRESS: '305 May St',
    CITY: 'Marshalltown',
    STATE: 'Iowa',
    POSTAL_CODE: '50158',
    COUNTRY: 'Unites States',
    MOBILE_PHONE: '+1 651-772-3816',
    ADDRESS_ALIAS: 'My office'
};

const DEFAULT_TIMEOUT = 5000;

describe("Go to the Homepage ", function () {
    browser.ignoreSynchronization = true; // This allows to protractor to run on regular website, not specific to angular 

    it("Go to the Home page ", function () {
        //1.          Acessar o site: www.automationpractice.com. 

        //Visitar a URL www.automationpractice.com ('')
        browser.get("http://automationpractice.com/index.php?");
        browser.wait(protractor.ExpectedConditions.visibilityOf(element(by.css(SELECTORS.HOME_PAGE_PRODUCT_LINK))), DEFAULT_TIMEOUT); 

        //2.          Escolha um produto qualquer na loja.

        //Clicar no nome do primeiro produto da home page 
        element(by.css(SELECTORS.HOME_PAGE_PRODUCT_LINK)).click();
        browser.wait(protractor.ExpectedConditions.visibilityOf(element(by.css(SELECTORS.ADD_TO_CART_BUTTON))), DEFAULT_TIMEOUT); 

        //3.          Adicione o produto escolhido ao carrinho.
        //Clicar no botão "Add to cart"
        element(by.css(SELECTORS.ADD_TO_CART_BUTTON)).click();
        browser.wait(protractor.ExpectedConditions.visibilityOf(element(by.css(SELECTORS.PROCEED_T0_CHECKOUT_BUTTON))), DEFAULT_TIMEOUT); 

        //4.          Prossiga para o checkout.
        //Clicar no botão "Proceed to checkout"
        element(by.css(SELECTORS.PROCEED_T0_CHECKOUT_BUTTON)).click();
        browser.wait(protractor.ExpectedConditions.visibilityOf(element(by.css(SELECTORS.VALIDATION_AND_PROCEED_T0_CHECKOUT_BUTTON))), DEFAULT_TIMEOUT);

        //5.          Valide se o produto foi corretamente adicionado ao carrinho e prossiga caso esteja tudo certo.
        //Clicar no botão "Proceed to checkout"
        element(by.css(SELECTORS.VALIDATION_AND_PROCEED_T0_CHECKOUT_BUTTON)).click();
        browser.wait(protractor.ExpectedConditions.visibilityOf(element(by.css(SELECTORS.RANDOM_EMAIL_FILL))), DEFAULT_TIMEOUT);

        //6.          Realize o cadastro do cliente preenchendo todos os campos obrigatórios dos formulários.
        //Preencher o campo "Email address" com o conteúdo "e-mail randômico" do lado esquerdo da tela
        element(by.css(SELECTORS.RANDOM_EMAIL_FILL)).sendKeys(USER_DATA.EMAIL_ADDRESS);
        browser.wait(protractor.ExpectedConditions.visibilityOf(element(by.css(SELECTORS.CREATE_AN_ACCOUNT_BUTTON))), DEFAULT_TIMEOUT);

        //Clicar no botão "Create an account"
        element(by.css(SELECTORS.CREATE_AN_ACCOUNT_BUTTON)).click();
        browser.wait(protractor.ExpectedConditions.visibilityOf(element(by.css(SELECTORS.MRS_BUTTON))), DEFAULT_TIMEOUT);

        //Clicar no botão "Mrs."
        element(by.css(SELECTORS.MRS_BUTTON)).click();

        //Preencher o campo "First name" com o conteúdo "Fernanda"
        element(by.css(SELECTORS.FIRST_NAME_FILL)).sendKeys(USER_DATA.FIRST_NAME);

        //Preencher o campo "Last name" com o conteúdo "Winter"
        element(by.css(SELECTORS.LAST_NAME_FILL)).sendKeys(USER_DATA.LAST_NAME);

        //Clicar no campo "Email"
        element(by.css(SELECTORS.EMAIL_FILL)).click();

        //Preencher o campo "Password" com o conteúdo "12345"
        element(by.css(SELECTORS.PASSWORD_FILL)).sendKeys(USER_DATA.PASSWORD);

        //Preencher o campo "Address" com o conteúdo "305 May St"
        element(by.css(SELECTORS.ADDRESS_FILL)).sendKeys(USER_DATA.ADDRESS);

        //Preencher o campo "City" com o conteúdo "Marshalltown"
        element(by.css(SELECTORS.CITY_FILL)).sendKeys(USER_DATA.CITY);

        //Preencher o campo "State" com o conteúdo "Iowa"
        element(by.css(SELECTORS.STATE_FILL)).sendKeys(USER_DATA.STATE);

        //Preencher o campo "Zip/Postal Code" com o conteúdo "50158"
        element(by.css(SELECTORS.POSTAL_CODE_FILL)).sendKeys(USER_DATA.POSTAL_CODE);

        //Preencher o campo "Country" com o conteúdo "Unites States"
        element(by.css(SELECTORS.COUTRY_FILL)).sendKeys(USER_DATA.COUNTRY);

        //Preencher o campo "Mobile phone" com o conteúdo "+1 651-772-3816"
        element(by.css(SELECTORS.MOBILE_PHONE_FILL)).sendKeys(USER_DATA.MOBILE_PHONE);

        //Preencher o campo "Assign an address alias for future reference." com o conteúdo "My office"
        element(by.css(SELECTORS.ADDRESS_ALIAS_FILL)).clear();
        element(by.css(SELECTORS.ADDRESS_ALIAS_FILL)).sendKeys(USER_DATA.ADDRESS_ALIAS);

        //Clicar no botão "Register"
        element(by.css(SELECTORS.REGISTER_BUTTON)).click();

        //7.          Valide se o endereço está correto e prossiga.
        //Clicar no botão "Proceed to checkout"
        element(by.css(SELECTORS.ADDRESS_VALIDATION_AND_PROCEED_TO_CHECKOUT_BUTTON)).click();
        browser.wait(protractor.ExpectedConditions.presenceOf(element(by.css(SELECTORS.TERMS_OF_SERVICE_CHECK))), 10000);

        //8.          Aceite os termos de serviço e prossiga.
        //Clicar na caixa de seleção do "Terms of service"
        element(by.css(SELECTORS.TERMS_OF_SERVICE_CHECK)).click();
        browser.wait(protractor.ExpectedConditions.visibilityOf(element(by.css(SELECTORS.PROCEED_TO_THE_NEXT_STEP_BUTTON))), DEFAULT_TIMEOUT);

        //Clicar no botão "Proceed to checkout"
        element(by.css(SELECTORS.PROCEED_TO_THE_NEXT_STEP_BUTTON)).click();
        browser.wait(protractor.ExpectedConditions.visibilityOf(element(by.css(SELECTORS.PAY_BY_BANK_WIRE_BUTTON))), DEFAULT_TIMEOUT);

        //9.          Valide o valor total da compra.
        //Verifica se o preço do produto está igual ao que estava na página no momento de selecionar para o carrinho de compra

        //10.      Selecione um método de pagamento e prossiga.
        //Clicar no botão "Pay by bank wire"
        element(by.css(SELECTORS.PAY_BY_BANK_WIRE_BUTTON)).click();
        browser.wait(protractor.ExpectedConditions.visibilityOf(element(by.css(SELECTORS.CONFIRM_MY_ORDER_BUTTON))), DEFAULT_TIMEOUT);

        //11.      Confirme a compra e valide se foi finalizada com sucesso.
        //Clicar no botão "I confirm my order"
        element(by.css(SELECTORS.CONFIRM_MY_ORDER_BUTTON)).click();

        expect(element(by.css(SELECTORS.SUCESSFUL_ORDER)).getText()).toEqual('Your order on My Store is complete.');
    });
});

function generateRandomNumber() {
    return Math.ceil(Math.random() * 1000000);
}
