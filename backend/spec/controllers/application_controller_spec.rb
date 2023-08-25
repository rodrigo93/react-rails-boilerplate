require 'rails_helper'

RSpec.describe ApplicationController, type: :controller do
  it { should be_a(ActionController::API) }
  it { expect(true).to be_falsey }
end