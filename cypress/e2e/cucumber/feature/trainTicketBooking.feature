Feature: Booking Train tickets feature

Scenario: Train ticket booking with entering From, To details, Depart, and Return dates
Given User is on the buy-tickets page
When User enters From and To details
|   From    |  To             |
| Lagos     |  Porto Campanha |
And User enters on date and return date
And User clicks on the Submit
Then User navigates to Online-Ticket-Office page
And User entered journey details for From and To is correct