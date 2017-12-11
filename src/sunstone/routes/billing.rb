$: << RUBY_LIB_LOCATION+"/billing"
# require 'stripe'
get '/billing/cards' do
    # get logged in userid
     # obtain UCI from USER/TEMPLATE
     # does it exist?
     # NO => create user... => store UCI in USER/TEMPLATE
     # Stripe.cards
    "GET CARDS\n"
end

post '/billing/card' do
   "POST CARD\n"
end

get '/billing/card/:uid' do
   "GET CARD #{params[:uid]} - #{params[:test]}\n"
end

delete '/billing/card/:uid' do
  "DELETE CARD #{params[:uid]}\n"
end

