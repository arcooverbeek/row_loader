class RowsController < ApplicationController

  def index
   
    @all_rows = Row.select(:id).collect(&:id)
    
    
    @rowss = []
    50.times do |index|
      @rowss << @all_rows[index]
    end
    @rows = Row.find(@rowss)
    @end = 50
  end
  
  def load_more
    if params[:end]
      @all_rows = Row.select(:id).collect(&:id)
      @rowss= []
      50.times do |index|
        
        @rowss << @all_rows[params[:end].to_i + index]
      end
      @rows = Row.find(@rowss)
      @end = params[:end].to_i + 50  
    end
    render :layout => false  
  end
end
