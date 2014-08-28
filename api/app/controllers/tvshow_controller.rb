class TvshowController < ApplicationController

	before_filter :initialize_var

	def initialize_var
		headers['Access-Control-Allow-Origin'] = '*'
    headers['Access-Control-Allow-Methods'] = 'POST, PUT, DELETE, GET, OPTIONS'
    headers['Access-Control-Request-Method'] = '*'
    headers['Access-Control-Allow-Headers'] = 'Origin, X-Requested-With, Content-Type, Accept, Authorization'
		unless request.xhr? #check if ajax call
      @epg = Beamly::Epg.new
      
      #create twitter
      @twitterClient = Twitter::REST::Client.new do |config|
        config.consumer_key        = "R62PiglJZGRyCfloNb2hOvFEA"
        config.consumer_secret     = "PUf2I3uefYaqEgeSmbOP10e6JJ0S1TEQE9Fi8CoiAPe0faDs9H"
        config.access_token        = "1705340629-xuQgw5Y0G8SH1kyTlK0e5DLcnS3XOZIY8qcnzZD"
        config.access_token_secret = "Fc6pNMUdlViVxzDVy07pqVaR3XePekjGpxOFt9QWbJLds"
      end
    end
	end

  def tvchannel_list
  end

  def tvshow__listing
  end

  def tvshow_details
  end

  def tvshow_list
  end

  #twitter
  def tweetsByHashtag
    render json: @twitterClient.search(params[:hashtag], :result_type => "recent").take(10).collect
  end

  def tweetsByTimeline
    render json: @twitterClient.user_timeline(params[:handle]).take(10).collect
  end

  def tweetsByMention
    render json: @twitterClient.mentions_timeline(params[:handle]).take(10).collect
  end


  #beamly methods
  def epg
  	render json: @epg.epg(params[:epg])
  end

  def schedule
  	render json: @epg.schedule(params[:schedule],DateTime.now.strftime('%Y/%m/%d'))
  end

  def broadcast_event
  	render json: @epg.broadcast_event(params[:broadcast_event])
  end

  def episode
  	render json: @epg.episode(params[:episode])
  end
end
