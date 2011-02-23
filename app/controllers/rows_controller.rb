class RowsController < ApplicationController

  def index
    @rows = Row.limit(50)
  end
  
  def load_more
    if params[:start] && params[:end]
      @rows = Row.limit(50)  
    end
    render :layout => false  
  end
end
