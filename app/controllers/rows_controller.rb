class RowsController < ApplicationController

  def index
    @rows = Row.limit(50)
    @end = 50
  end
  
  def load_more
    if params[:end]
      @rows = Row.limit(50)
      #@rows = Row.find(:all, :conditions => { :grade => 9..12 })
      @end = params[:end].to_i + 50  
    end
    render :layout => false  
  end
end
