class User < ActiveRecord :: Base
	has_many :events
end
class Event < ActiveRecord :: Base
	has_many :items
	belongs_to :users
end

class Item < ActiveRecord :: Base
	belongs_to :events
end

