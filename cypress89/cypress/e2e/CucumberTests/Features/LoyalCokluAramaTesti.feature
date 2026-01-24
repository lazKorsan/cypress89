
Feature:

Scenario Outline: Loyal Arama Testi
Given Kullanıcı "https://qa.loyalfriendcare.com/en" sitesine gider
Then Loyal Kullanicisi arama kutusunda "<aranacakKelime>" aratir

Examples:
| aranacakKelime |
| re             |
| ra             |
| me             |