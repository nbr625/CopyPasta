class Clip < ActiveRecord::Base

	
	       ####  Copy  ####

	def copy_1
		variable1 = Clipboard.paste
	end

	def copy_2
		variable2 = Clipboard.paste
	end

	def copy_3
		variable3 = Clipboard.paste
	end

	def copy_4
		variable4 = Clipboard.paste
	end
	def copy_5
		variable5 = Clipboard.paste
	end


	      #### Pasta  ####

	def pasta_1
		Clipboard.copy(variable1)
		Clipboard.paste
	end

	def pasta_2
		Clipboard.copy(variable2)
		Clipboard.paste
	end
	def pasta_3
		Clipboard.copy(variable1)
		Clipboard.paste
	end

	def pasta_4
		Clipboard.copy(variable2)
		Clipboard.paste
	end
	def pasta_5
		Clipboard.copy(variable1)
		Clipboard.paste
	end
	end
end