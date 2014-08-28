require 'test_helper'

class TvshowControllerTest < ActionController::TestCase
  test "should get tvchannel_list" do
    get :tvchannel_list
    assert_response :success
  end

  test "should get tv_show_listing" do
    get :tv_show_listing
    assert_response :success
  end

  test "should get tv_showdetails" do
    get :tv_showdetails
    assert_response :success
  end

  test "should get tvshow_list" do
    get :tvshow_list
    assert_response :success
  end

end
